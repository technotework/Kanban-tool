//--------------
//state
//--------------
function state() {
  return {
    appInfo: {},
    tasksData: [],
    isOpenEditor: false,
    parentBoardId: ""
  };
}

//--------------
//mutations
//--------------
const mutations = {
  initializeData(state, payload) {
    state.appInfo = payload;
  },
  setParentBoardId(state, payload) {
    state.parentBoardId = payload;
  },
  setTasksData(state, payload) {

    state.tasksData = payload;
  },
  setEditorOpen(state, payload) {
    state.isOpenEditor = payload;
  },
}

//--------------
//getters
//--------------
const getters = {
  info(state) {
    return state.appInfo;
  },
  tasks(state) {
    return state.tasksData;
  },
  isOpen(state) {
    return state.isOpenEditor;
  },
  boardId(state) {
    return state.parentBoardId;
  }
}

//--------------
//actions
//--------------
const actions = {
  setInitialData({ rootGetters, commit }, value) {

    let info = {
      uuid: rootGetters["auth/user"].uuid,
      projectPath: rootGetters["auth/path"] + rootGetters["boards/projectId"],
      boardPath: rootGetters["auth/path"] + rootGetters["boards/projectId"] + "/boards/",
      boardDocPath: rootGetters["auth/path"] + rootGetters["boards/projectId"] + "/boards/" + value,
      taskPath: rootGetters["auth/path"] + rootGetters["boards/projectId"] + "/boards/" + value + "/tasks/"
    }
    commit("initializeData", info);
  },
  /**==============================
   * Taskの新規作成
   * @param {*} param0 
   * @param {*} value 
   ==============================*/
  createTask({ getters, rootGetters, commit }, value) {
    return new Promise(async (resolve, reject) => {

      let { uuid, projectPath, boardPath, boardDocPath, taskPath } = getters.info;

      let content = value.value;
      let date = Math.floor(new Date().getTime() / 1000);

      let template = {
        task: {
          "id": "",
          "data": content,
          "labels": [],
          "members": [],
          "createUser": `${uuid}`,
          "create_date": `${date}`,
          "start_date": null,
          "end_date": null,
          "archive_date": null,
          "comments": []
        }
      };

      let db = rootGetters.db;
      //新規タスク追加
      let collection = db.collection(taskPath);
      let taskDoc = await collection.add(template);

      //並び順管理するためのフィールドを更新
      //全部取得
      let boardDoc = db.doc(boardDocPath);
      let docData = await boardDoc.get();

      //一部書き換えてset
      let obj = docData.data();

      obj.board.task_sort.unshift(taskDoc.id);

      await boardDoc.set({ board: { "task_sort": obj.board.task_sort } }, { merge: true }).then(() => {
        resolve();
      });

    }, (error) => {
      console.log(error);
    });
  },
  insertTask({ getters, rootGetters, commit }, value) {
    return new Promise(async (resolve, reject) => {

      let { uuid, projectPath, boardPath, boardDocPath, taskPath } = getters.info;

      let template = value.template;
      let index = value.index;
      let id = value.id;
      let db = rootGetters.db;

      //並び順管理するためのフィールドを更新
      //全部取得
      let boardDoc = db.doc(boardDocPath);
      let docData = await boardDoc.get();
      //一部書き換えてset
      let obj = docData.data();
      obj.board.task_sort.splice(index, 0, id);

      await boardDoc.set({ board: { "task_sort": obj.board.task_sort } }, { merge: true }).then(() => {
        resolve();
      });

      //タスク追加
      let doc = db.doc(taskPath + id);
      let taskDoc = await doc.set(template).then(() => {
        resolve();
      });


    }, (error) => {
      console.log(error);
    });
  },
  /**=============================
   * 初期読み込み
   * @param {*} param0 
   * @param {*} value 
   =============================*/
  read({ commit, getters, rootGetters }) {
    return new Promise(async (resolve, reject) => {

      let { uuid, projectPath, boardPath, boardDocPath, taskPath } = getters.info;

      //読み込み&Listen
      let db = rootGetters.db;
      let collection = db.collection(taskPath);
      collection.onSnapshot(function (querySnapshot) {

        let array = [];
        querySnapshot.forEach(function (doc) {
          let result = doc.data();
          result.task.id = doc.id;
          array.push(result);
        });
        commit("setTasksData", array);
        //並びかえ
        /*
        db.doc(boardDocPath).onSnapshot((doc) => {
          let data = doc.data();
          if (data != undefined) {
            let taskSort = data.board.task_sort;
            array.sort((a, b) => taskSort.indexOf(a.task.id) - taskSort.indexOf(b.task.id));
            commit("setTasksData", array);
          }
        });*/
      });

    }, (error) => {
      console.log(error);
    });
  },


  /**=============================
   * タスクをアップデート
   * @param {*} param0 
   * @param {*} value 
   =============================*/
  updateTask({ getters, rootGetters }, value) {

    return new Promise((resolve, reject) => {

      let { uuid, projectPath, boardPath, boardDocPath, taskPath } = getters.info;
      let db = rootGetters.db;
      let content = value.value;
      let taskId = value.id;
      let boardId = getters.boardId;

      let taskDocPath = taskPath + taskId;
      db.doc(taskDocPath).set({ task: { "data": content } }, { merge: true }).then(() => {
        resolve();
      });

    }, (error) => {
      console.log(error);
    });

  },

  /**=============================
   * タスクを削除
   * @param {*} param0 
   * @param {*} value 
   =============================*/
  deleteTask({ getters, rootGetters, commit }, value) {

    return new Promise(async (resolve, reject) => {

      let { uuid, projectPath, boardPath, boardDocPath, taskPath } = getters.info;

      let taskId = value.id;
      let db = rootGetters.db;


      //削除
      let taskDocPath = taskPath + taskId;
      await db.doc(taskDocPath).delete();

      //並び順管理するためのフィールドを更新
      //全部取得
      let boardDoc = db.doc(boardDocPath);
      let docData = await boardDoc.get();

      //一部書き換えてset
      let obj = docData.data();
      let array = obj.board.task_sort
      let index = array.indexOf(taskId);
      if (index >= 0) {
        array.splice(index, 1);
      }
      await boardDoc.set({ board: { "task_sort": array } }, { merge: true }).then(() => {
        resolve();
      });

    }, (error) => {
      console.log(error);
    });
  },

  /**=========================================================
   * ドラッグ&ドロップによる更新関連
  /**=========================================================
   * ドラッグして追加されたので、旧リストからデータを引き継ぎ元を消す
   * @param {*} param0 
   * @param {*} value 
   =============================*/
  updateSort({ rootGetters }, value) {



  },
  dragAdded({ rootGetters, getters, dispatch }, value) {
    return new Promise(async (resolve, reject) => {

      let taskId = value.id;
      let originalBoardId = value.boardId;
      let { uuid, projectPath, boardPath, boardDocPath, taskPath } = getters.info;
      //パスの設定
      let originalTaskDocPath = projectPath + "/boards/" + originalBoardId + "/tasks/" + taskId;
      let currentTaskCollectionPath = taskPath;

      //現在のindexの取得
      let tasksArray = getters.tasks;
      let index;
      for (let i = 0; i < tasksArray.length; i++) {

        if (tasksArray[i].task.id == taskId) {
          index = i;
        }
      }

      let db = rootGetters.db;
      //オリジナルタスクのコンテンツ取得
      let taskData = await db.doc(originalTaskDocPath).get();
      let data = taskData.data();
      //オリジナルタスクの消し込み
      await dispatch("task_" + originalBoardId + "/deleteTask", { id: taskId }, { root: true });

      //移動後のタスクの生成
      await dispatch("insertTask", { template: data, index: index, id: taskId });

    });

  },
}

export { state, mutations, getters, actions }
export default {
  namespaced: true,
  strict: true,
  state,
  mutations,
  getters,
  actions
}