import { resolvePreset } from "@babel/core";

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
  createTask({ getters, rootGetters }, value) {
    return new Promise(async (resolve, reject) => {

      let { uuid, taskPath } = getters.info;

      let content = value.value;
      let date = Math.floor(new Date().getTime() / 1000);

      let order = getOrder(null, getters.tasks);

      let template = {
        task: {
          "id": "",
          "order": order,
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
      await collection.add(template);
      resolve();

    }, (error) => {
      console.log(error);
    });
  },
  /**==============================
   * Taskの挿入
   * @param {*} param0 
   * @param {*} value 
   ==============================*/
  insertTask({ getters, rootGetters }, value) {
    return new Promise(async (resolve, reject) => {

      let { taskPath } = getters.info;

      let template = value.template;
      let id = value.id;
      let order = getOrder(id, getters.tasks);
      template.task.order = order;

      //タスク追加
      let db = rootGetters.db;
      let doc = db.doc(taskPath + id);
      await doc.set(template).then(() => {
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

      let { taskPath } = getters.info;

      //読み込み&Listen
      let db = rootGetters.db;
      let collection = db.collection(taskPath);
      collection.orderBy("task.order").onSnapshot(function (querySnapshot) {

        let array = [];
        querySnapshot.forEach(function (doc) {
          let result = doc.data();
          result.task.id = doc.id;
          array.push(result);
        });
        commit("setTasksData", array);
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

      let { taskPath } = getters.info;

      let content = value.value;
      let taskId = value.id;
      let taskDocPath = taskPath + taskId;

      let db = rootGetters.db;
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

      let { taskPath } = getters.info;

      let taskId = value.id;
      let taskDocPath = taskPath + taskId;
      console.log("delete");
      //削除
      let db = rootGetters.db;
      await db.doc(taskDocPath).delete().then(() => {
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
  dragSortUpdate({ rootGetters, getters }, value) {
    return new Promise(async (resolve, reject) => {

      let { taskPath } = getters.info;

      let taskId = value.id;
      let taskDocPath = taskPath + taskId;

      let order = getOrder(taskId, getters.tasks);

      let db = rootGetters.db;
      db.doc(taskDocPath).set({ task: { "order": order } }, { merge: true }).then(() => {
        resolve();
      });


    }, (error) => {
      console.log(error);
    });
  },
  /**===========================
  * ドラッグして追加されたので、旧リストからデータを引き継ぎ元を消す
  * @param {*} param0 
  * @param {*} value 
  =============================*/
  dragAdded({ rootGetters, getters, dispatch }, value) {
    return new Promise(async (resolve, reject) => {

      let taskId = value.id;
      let originalBoardId = value.boardId;
      let { projectPath } = getters.info;
      //パスの設定
      let originalTaskDocPath = projectPath + "/boards/" + originalBoardId + "/tasks/" + taskId;

      let db = rootGetters.db;
      //オリジナルタスクのコンテンツ取得
      let taskData = await db.doc(originalTaskDocPath).get();
      let data = taskData.data();
      //オリジナルタスクの消し込み
      await dispatch("task_" + originalBoardId + "/deleteTask", { id: taskId }, { root: true });

      //移動後のタスクの生成
      await dispatch("insertTask", { template: data, id: taskId });
      resolve();
    }, (error) => {
      console.log(error);
    });
  }
}

/**
 * 自分のorderを算出
 * @param {*} id 
 * @param {*} tasksArray 
 */
function getOrder(id, tasks) {

  let unit = 10000000;
  let prevOrder, nextOrder, myOrder = null;
  let tasksArray = tasks;

  //新規
  //新規で自分しかいない
  if (id == null && tasksArray.length == 0) {

    myOrder = unit;
  }
  //自分が先頭で後ろにいる
  else if (id == null && tasksArray.length > 0) {

    prevOrder = 0;
    nextOrder = tasksArray[0].task.order;
  }
  //新規じゃない
  else {

    //indexを特定
    let myIndex;
    for (let i = 0; i < tasksArray.length; i++) {

      if (tasksArray[i].task.id == id) {

        myIndex = i;
      }
    }
    //前後のindexを特定
    let prev = myIndex - 1;
    let next = myIndex + 1;


    //新規じゃないが自分しかいない
    if (myIndex == 0 && tasksArray.length == 1) {

      myOrder = unit;
    }
    //自分が先頭
    else if (myIndex == 0 && tasksArray.length > 1) {

      prevOrder = 0;
      nextOrder = tasksArray[next].task.order;
    }
    //自分が末端
    else if (myIndex == tasksArray.length - 1 && tasksArray.length > 1) {

      prevOrder = tasksArray[prev].task.order;
      myOrder = prevOrder + unit;
    }
    //自分の前後にいる
    else {
      prevOrder = tasksArray[prev].task.order;
      nextOrder = tasksArray[next].task.order;
    }

  }

  if (myOrder == null) {
    myOrder = prevOrder + (nextOrder - prevOrder) / 2;
    myOrder = prevOrder + (nextOrder - prevOrder) / 2;
  }
  return myOrder;
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