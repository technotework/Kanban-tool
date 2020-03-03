import common from "@/store/common"

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
      boardId: value,
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

      //setting
      let { uuid, taskPath } = getters.info;
      let content = value.value;
      let date = Math.floor(new Date().getTime() / 1000);
      let order = common.util.getOrder(null, getters.tasks, "task");
      let template = common.templates.task(uuid, date, order, content);

      //作成
      let object = {
        path: taskPath,
        content: template
      };
      await common.fb.add(object).catch(reject);

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
      let id = value.id;
      let template = value.template;
      let order = common.util.getOrder(id, getters.tasks, "task");
      template.task.order = order;
      //作成
      let object = {
        path: taskPath + id,
        content: template
      };
      await common.fb.setDoc(object).catch(reject);
      resolve();

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

    return new Promise(async (resolve, reject) => {

      //setting
      let { taskPath } = getters.info;
      let content = value.value;
      let taskDocPath = taskPath + value.id;

      //実行
      let object = {
        path: taskDocPath,
        content: { task: { "data": content } }
      };
      await common.fb.setDoc(object).catch(reject);
      resolve();


    }, (error) => {
      console.log(error);
    });

  },
  /**==============================
 * メンバー情報のアップデート
 * 
 ==============================*/
  updateMember({ getters, rootGetters }, value) {

    return new Promise(async (resolve, reject) => {

      //setting
      let { id, data } = value;
      let { taskPath } = getters.info;
      let taskDocPath = taskPath + id;
      let content = data;
      //実行
      let object = {
        path: taskDocPath,
        content: { task: { "members": content } }
      };
      await common.fb.setDoc(object).catch(reject);
      resolve();


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

      //setting
      let { taskPath } = getters.info;
      let taskDocPath = taskPath + value.id;
      //実行
      common.fb.deleteDoc({ path: taskDocPath }).catch(reject);
      resolve();

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

      //同じボード内でのみ発動させる
      let { taskPath } = getters.info;
      let taskId = value.id;
      //判定
      let isSameBoard = false;
      for (let i = 0; i < getters.tasks.length; i++) {

        if (getters.tasks[i].task.id == taskId) {
          isSameBoard = true;
        }
      }
      //実行
      if (isSameBoard) {
        let taskDocPath = taskPath + taskId;
        let order = common.util.getOrder(taskId, getters.tasks, "task");
        let object = {
          path: taskDocPath,
          content: { task: { "order": order } }
        };
        await common.fb.setDoc(object).catch(reject);
        resolve();
      }

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


export { state, mutations, getters, actions }
export default {
  namespaced: true,
  strict: true,
  state,
  mutations,
  getters,
  actions
}