import store from "@/store/index";
import taskModule from "@/store/modules/tasks/tasks";
import common from "@/store/common";
//--------------
//actions
//--------------
const actions = {
    initBoardData({ commit, rootGetters }, value) {
        const info = {
            projectId: value,
            projectDocPath: rootGetters["auth/path"] + value,
            boardPath: rootGetters["auth/path"] + value + "/boards/"
        };
        commit("setAppInfo", info);

        return info;
    },
    /**========================
	 * ボード作成
	 * @param {*} param0 
	 * @param {*} value 
	 ========================*/
    async create({ commit, getters }, value) {
        //setting
        const { boardPath } = getters.info;
        const order = common.util.getOrder(null, getters.boards, "board");
        const boardTemplate = common.templates.board(order);
        const object = {
            path: boardPath,
            content: boardTemplate
        };
        await common.fb.add(object);
        actions.$_updateDate(commit);
    },
    /**========================
	 * 初期読み込み
	 * @param {*} param0 
	 ========================*/
    async read({ commit, rootGetters, getters, dispatch }) {
        //リロード対策 projectモジュールの再読み込み
        if (rootGetters["projects/projects"].length == 0) {
            dispatch("projects/read", null, { root: true });
        }

        const { boardPath } = getters.info;
        //ボード読み込み
        await actions.$_readBoard(boardPath, commit);
    },
    /**
     * ボードを読み込み
     * @param {*} boardPath
     * @param {*} commit
     */
    async $_readBoard(boardPath, commit) {
        const object = {
            path: boardPath,
            order: "board.order",
            callback: actions.$_readCallback(commit)
        };
        const unsnap = await common.fb.snap(object);
        commit("setUnsnap", unsnap);
    },
    /**
     * readのfirebase通信後callbackされる関数
     * @param {*} commit
     */
    $_readCallback(commit) {
        return querySnapshot => {
            let array = [];
            querySnapshot.forEach(function(doc) {
                const result = doc.data();
                result.board.id = doc.id;
                array.push(result);
                //boardのtask用のstore moduleを生成
                actions.$_registTaskModule(doc);
            });
            commit("setBoardsData", array);
        };
    },
    /**
     * TaskModuleがなければ登録する
     * @param {*} doc
     */
    $_registTaskModule(doc) {
        const storeModuleName = "task_" + doc.id;
        let hasModule = actions.$_checkTaskModule(storeModuleName);
        if (!hasModule) {
            store.registerModule(storeModuleName, taskModule);
            store.commit(storeModuleName + "/setParentBoardId", doc.id);
            store.dispatch(storeModuleName + "/setInitialData", doc.id);
            store.dispatch(storeModuleName + "/read", doc.id);
        }
    },
    /**
     * TaskModuleの有無の確認
     * @param {*} storeModuleName
     */
    $_checkTaskModule(storeModuleName) {
        return store.state.hasOwnProperty(storeModuleName);
    },
    /**========================
	 * ボード名更新
	 * @param {*} param0 
	 * @param {*} value 
	======================== */
    async updateBoardName({ commit, getters }, value) {
        //setting
        const { boardPath } = getters.info;
        const boardDocPath = boardPath + value.id;

        const object = {
            path: boardDocPath,
            content: { board: { label: value.name } }
        };
        await common.fb.setDoc(object);
        actions.$_updateDate(commit);
    },
    /**========================
	 * ボード削除
	 * @param {*} param0 
	 * @param {*} value 
	 ========================*/
    async delete({ commit, getters }, value) {
        //setting
        const { boardPath } = getters.info;
        const boardDocId = value;
        const boardDocPath = boardPath + boardDocId;
        const taskPath = boardDocPath + "/tasks/";

        //Taskの削除
        await actions.$_deleteTask(taskPath);
        //Boardの削除
        actions.$_deleteBoard(boardDocPath);
        actions.$_updateDate(commit);
    },
    /**
     * ボードの削除
     * @param {*} boardDocPath
     */
    $_deleteBoard(boardDocPath) {
        common.fb.deleteDoc({ path: boardDocPath });
    },
    /**
     * タスクの削除
     * @param {*} taskPath
     */
    async $_deleteTask(taskPath) {
        let taskDataArray = await actions.$_getDeleteTask(taskPath);
        for (let i = 0; i < taskDataArray.length; i++) {
            let taskDocPath = taskPath + taskDataArray[i].task.id;
            common.fb.deleteDoc({ path: taskDocPath });
        }
    },
    /**
     * 削除対象のTaskw読んで返す
     * @param {*} taskPath
     */
    async $_getDeleteTask(taskPath) {
        const object = {
            path: taskPath,
            key: "task"
        };
        let taskDataArray = await common.fb.get(object);
        return taskDataArray;
    },
    /**
     * Backやブラウザを閉じて離脱後の後処理をFirebase Functionsに投げる
     * @param {*} param0
     */
    postProcess({ rootGetters, getters }) {
        let resultStr = "";
        //編集中のtaskを収集
        for (const key in rootGetters) {
            let getter = key.match(/task_.*editingDocPaths/);
            if (getter != null) {
                let sep = "";
                if (resultStr != "") {
                    sep = ",";
                }
                if (rootGetters[getter].length > 0) {
                    resultStr += sep + rootGetters[getter].join(",");
                }
            }
        }

        let pathArray = [];
        if (resultStr != "") {
            pathArray = resultStr.split(",");
        }
        let projectDoc = getters.info.projectDocPath;
        let updateDate = getters.updateDate;

        common.fb.postProcess({
            taskDocPaths: pathArray,
            projectDocPath: projectDoc,
            date: updateDate
        });
    },
    /**=========================================================
	 * ドラッグ&ドロップによる更新関連
	/**=========================================================
	 * ドラッグして追加されたので、旧リストからデータを引き継ぎ元を消す
	 * @param {*} param0 
	 * @param {*} value 
	 =============================*/
    async dragSortUpdate({ commit, getters }, value) {
        const { boardPath } = getters.info;

        const boardId = value.id;
        const boardDocPath = boardPath + boardId;
        const order = common.util.getOrder(boardId, getters.boards, "board");

        const object = {
            path: boardDocPath,
            content: { board: { order: order } }
        };
        await common.fb.setDoc(object);
        actions.$_updateDate(commit);
    },
    /**=========================================================
     * 日付更新commit
     * @param {*} commit 
    =============================*/
    $_updateDate(commit) {
        commit("setUpdateDate");
    }
};

export default actions;
