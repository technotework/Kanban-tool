//--------------
//state
//--------------
function state() {
  return {
    tasksData: []
  };
}

//--------------
//mutations
//--------------
const mutations = {
  setTasksData(state, payload) {

    state.tasksData = payload;
  }
}

//--------------
//getters
//--------------
const getters = {
  tasks(state) {
    return state.tasksData;
  }
}

//--------------
//actions
//--------------
const actions = {
  /**=============================
   * Taskの新規作成
   * @param {*} param0 
   * @param {*} value 
   =============================*/
  createTask({ rootGetters }, value) {
    return new Promise(async (resolve, reject) => {

      let content = value.value;
      let boardId = value.boardId;
      let db = rootGetters.db;
      let path = rootGetters["auth/path"];
      let projectId = rootGetters["boards/projectId"];
      let boardPath = path + projectId + "/boards/";
      let taskPath = boardPath + boardId + "/tasks/";

      //実行
      let collection = db.collection(taskPath);
      let uuid = rootGetters["auth/user"].uuid;
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
      //新規タスク追加
      let taskDoc = await collection.add(template);

      //並び順管理するためのフィールドを更新
      //全部取得
      let boardDoc = db.doc(boardPath + boardId);
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
  /**=============================
   * 初期読み込み
   * @param {*} param0 
   * @param {*} value 
   =============================*/
  read({ commit, rootGetters }, value) {
    return new Promise(async (resolve, reject) => {

      //パスの設定
      let db = rootGetters.db;
      let path = rootGetters["auth/path"];
      let projectId = rootGetters["boards/projectId"];
      let boardPath = path + projectId + "/boards/";
      let tasksPath = boardPath + value + "/tasks/"

      //読み込み&Listen
      let collection = db.collection(tasksPath);
      collection.onSnapshot(function (querySnapshot) {

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
  updateTask({ rootGetters }, value) {

    return new Promise((resolve, reject) => {

      let content = value.value;
      let taskId = value.id;
      let boardId = value.boardId;
      let db = rootGetters.db;
      let path = rootGetters["auth/path"];
      let projectId = rootGetters["boards/projectId"];
      let boardPath = path + projectId + "/boards/";
      let taskDocPath = boardPath + boardId + "/tasks/" + taskId;
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
  deleteTask({ rootGetters }, value) {

    return new Promise(async (resolve, reject) => {

      let taskId = value.id;
      let boardId = value.boardId;
      let db = rootGetters.db;
      let path = rootGetters["auth/path"];
      let projectId = rootGetters["boards/projectId"];
      let boardPath = path + projectId + "/boards/";
      let taskDocPath = boardPath + boardId + "/tasks/" + taskId;
      console.log(taskDocPath);
      await db.doc(taskDocPath).delete();

      //並び順管理するためのフィールドを更新
      //全部取得
      let boardDoc = db.doc(boardPath + boardId);
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
  }
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