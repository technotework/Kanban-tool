import common from "@/store/common";
//--------------
//actions
//--------------
const actions = {
    setInitialData({ rootGetters, commit }, value) {
        const info = {
            uuid: rootGetters["auth/user"].uuid,
            altid: rootGetters["auth/user"].altId,
            projectPath:
                rootGetters["auth/path"] + rootGetters["boards/projectId"],
            boardId: value,
            boardPath:
                rootGetters["auth/path"] +
                rootGetters["boards/projectId"] +
                "/boards/",
            boardDocPath:
                rootGetters["auth/path"] +
                rootGetters["boards/projectId"] +
                "/boards/" +
                value,
            taskPath:
                rootGetters["auth/path"] +
                rootGetters["boards/projectId"] +
                "/boards/" +
                value +
                "/tasks/"
        };
        commit("initializeData", info);
    },
    /**==============================
   * Taskの新規作成
   * @param {*} param0 
   * @param {*} value 
   ==============================*/
    async createTask({ getters, commit }, value) {
        //setting
        const { uuid, taskPath } = getters.info;
        const content = value.value;
        const date = Math.floor(new Date().getTime() / 1000);
        const order = common.util.getOrder(null, getters.tasks, "task");
        const template = common.templates.task(uuid, date, order, content);

        //作成
        const object = {
            path: taskPath,
            content: template
        };
        await common.fb.add(object);
        commit("boards/setUpdateDate", null, { root: true });
    },
    /**==============================
   * Taskの挿入
   * @param {*} param0 
   * @param {*} value 
   ==============================*/
    async insertTask({ getters, commit }, value) {
        const { taskPath } = getters.info;
        const id = value.id;
        const template = value.template;
        const order = common.util.getOrder(id, getters.tasks, "task");
        template.task.order = order;
        //作成
        const object = {
            path: taskPath + id,
            content: template
        };
        await common.fb.setDoc(object);
        commit("boards/setUpdateDate", null, { root: true });
    },
    /**=============================
   * 初期読み込み
   * @param {*} param0 
   * @param {*} value 
   =============================*/
    read({ commit, getters, dispatch }) {
        const { taskPath } = getters.info;

        const object = {
            path: taskPath,
            order: "task.order",
            callback: actions.$_readTasksCallback(dispatch, commit)
        };
        const unsnap = common.fb.snap(object);
        commit("setUnsnap", unsnap);
    },
    /**
     * タスクをfirebaseから読んだ後のcallback
     * @param {*} dispatch
     * @param {*} commit
     */
    $_readTasksCallback(dispatch, commit) {
        return querySnapshot => {
            let array = [];
            querySnapshot.forEach(function(doc) {
                let result = doc.data();
                result.task.id = doc.id;
                //予期せずロックしっぱなしだった場合、30分たっていたらロック解除する
                actions.$_timeUnlockEditUser(result, dispatch);
                array.push(result);
            });
            commit("setTasksData", array);
        };
    },
    /**
     * ロックの時限解除
     * @param {*} result
     * @param {*} dispatch
     */
    $_timeUnlockEditUser(result, dispatch) {
        if (result.task.editing != "") {
            let now = Math.floor(new Date().getTime() / 1000);
            if (
                result.task.editing_date != null &&
                now - result.task.editing_date > 1800
            ) {
                dispatch("unlockTask", {
                    id: result.task.id
                });
            }
        }
    },
    /**=============================
   * タスクをアップデート
   * @param {*} param0 
   * @param {*} value 
   =============================*/
    async updateTask({ getters, commit }, value) {
        //setting
        const { taskPath } = getters.info;
        const content = value.value;
        const taskDocPath = taskPath + value.id;

        //実行
        const object = {
            path: taskDocPath,
            content: { task: { data: content } }
        };
        await common.fb.setDoc(object);
        commit("boards/setUpdateDate", null, { root: true });
    },
    /**==============================
     * メンバー情報のアップデート
     ==============================*/
    async updateMember({ getters, commit }, value) {
        //setting
        const { id, data } = value;
        const { taskPath } = getters.info;
        const taskDocPath = taskPath + id;
        const content = data;
        //実行
        const object = {
            path: taskDocPath,
            content: { task: { members: content } }
        };
        await common.fb.setDoc(object);
        commit("boards/setUpdateDate", null, { root: true });
    },
    /**=============================
   * タスクを削除
   * @param {*} param0 
   * @param {*} value 
   =============================*/
    deleteTask({ getters, rootGetters, commit }, value) {
        //setting
        const { taskPath } = getters.info;
        const taskDocPath = taskPath + value.id;
        //実行
        common.fb.deleteDoc({ path: taskDocPath });
        commit("boards/setUpdateDate", null, { root: true });
    },
    /**
     * 現在の編集者を追加
     * @param {*} param0
     * @param {*} value
     */
    async lockTask({ getters, rootGetters, commit }, value) {
        //setting
        const { taskPath } = getters.info;
        const taskDocPath = taskPath + value.id;
        const date = Math.floor(new Date().getTime() / 1000);
        const userId = rootGetters["auth/user"].altId;
        //実行
        const object = {
            path: taskDocPath,
            content: { task: { editing: userId, editing_date: date } }
        };
        await common.fb.setDoc(object);
    },
    /**
     * 現在の編集者を解除
     * @param {*} param0
     * @param {*} value
     */
    async unlockTask({ getters, rootGetters, commit }, value) {
        //setting
        const { taskPath } = getters.info;
        const taskDocPath = taskPath + value.id;
        const date = null;
        const userId = "";
        //実行
        const object = {
            path: taskDocPath,
            content: { task: { editing: userId, editing_date: date } }
        };
        await common.fb.setDoc(object);
    },

    /**=========================================================
   * ドラッグ&ドロップによる更新関連
  /**=========================================================
   * ドラッグして追加されたので、旧リストからデータを引き継ぎ元を消す
   * @param {*} param0 
   * @param {*} value 
   =============================*/
    async dragSortUpdate({ commit, getters }, value) {
        //同じボード内でのみ発動させる
        const { taskPath } = getters.info;
        const taskId = value.id;
        //判定
        let isSameBoard = false;
        for (let i = 0; i < getters.tasks.length; i++) {
            if (getters.tasks[i].task.id == taskId) {
                isSameBoard = true;
            }
        }
        //実行
        if (isSameBoard) {
            const taskDocPath = taskPath + taskId;
            const order = common.util.getOrder(taskId, getters.tasks, "task");
            const object = {
                path: taskDocPath,
                content: { task: { order: order } }
            };
            await common.fb.setDoc(object);
            commit("boards/setUpdateDate", null, { root: true });
        }
    },
    /**===========================
  * ドラッグして追加されたので、旧リストからデータを引き継ぎ元を消す
  * @param {*} param0 
  * @param {*} value 
  =============================*/
    async dragAdded({ rootGetters, getters, dispatch }, value) {
        const taskId = value.id;
        const originalBoardId = value.boardId;
        const { projectPath } = getters.info;
        //パスの設定
        const originalTaskDocPath =
            projectPath + "/boards/" + originalBoardId + "/tasks/" + taskId;

        //オリジナルタスクのコンテンツ取得
        const data = await actions.$_getOriginalTaskData(originalTaskDocPath);
        //オリジナルタスクの消し込み
        await dispatch(
            "task_" + originalBoardId + "/deleteTask",
            { id: taskId },
            { root: true }
        );
        //移動後のタスクの生成
        await dispatch("insertTask", { template: data, id: taskId });
    },
    /**
     * オリジナルのタスクデータを確保
     * @param {*} originalTaskDocPath
     */
    async $_getOriginalTaskData(originalTaskDocPath) {
        const object = { path: originalTaskDocPath };
        const taskData = await common.fb.getDoc(object);
        const data = taskData.data();
        return data;
    }
};

export default actions;
