import store from "@/store/index";
import common from "@/store/common";
//--------------
//actions
//--------------
const actions = {
    initProjectData({ commit, rootGetters }) {
        const path = rootGetters["auth/path"];
        const uuid = rootGetters["auth/user"].uuid;

        const info = {
            uuid: uuid,
            projectPath: path
        };
        commit("setAppInfo", info);
    },
    /**=============================
	 * 新規作成
	 * @param {*} param0 
	 =============================*/
    async create({ getters, rootGetters }) {
        const { uuid, projectPath } = getters.info;
        const date = Math.floor(new Date().getTime() / 1000);
        //Projectドキュメントをを追加します
        const projectDoc = await actions.$_createProject(
            projectPath,
            date,
            getters.projects
        );
        //boardsドキュメントを作ります
        const firstBoardID = await actions.$_createBoards(
            projectPath,
            projectDoc
        );

        //続けてタスクを先頭のボードに追加する
        const boardDocumentPath =
            projectPath + projectDoc.id + "/boards/" + firstBoardID.id;
        await actions.$_createTasks(uuid, date, boardDocumentPath);
    },

    /**
     * Projectドキュメントを作成
     */
    async $_createProject(path, date, projects) {
        //順番の初期化
        const order = common.util.getOrder(null, projects, "project");
        //テンプレートの取得
        const initialTemplate = common.templates.project(date, order);
        //作成
        const object = {
            path: path,
            content: initialTemplate
        };
        const data = await common.fb.add(object);
        return data;
    },
    /**
     * BoardDocumentを作成
     * @param {*} path
     * @param {*} projectDoc
     */
    async $_createBoards(path, projectDoc) {
        //テンプレ取得
        const array = common.templates.initialBoards();
        //作成
        let firstData;
        for (let i = 0; i < array.length; i++) {
            let object = {
                path: path + projectDoc.id + "/boards/",
                content: array[i]
            };
            let data = await common.fb.add(object);
            if (i == 0) {
                firstData = data;
            }
        }
        return firstData;
    },
    /**
     * 初期タスクを作成
     * @param {*} uuid
     * @param {*} date
     * @param {*} boardDocumentPath
     */
    async $_createTasks(uuid, date, boardDocumentPath) {
        //テンプレ取得
        const text = "Wクリックで編集";

        const initialTaskTemplate = common.templates.task(
            uuid,
            date,
            null,
            text
        );
        //作成
        const object = {
            path: boardDocumentPath + "/tasks/",
            content: initialTaskTemplate
        };
        const data = await common.fb.add(object);
        return data;
    },
    /**=============================
	 * 読み込み
	 * @param {*} param0 
	 =============================*/
    read({ commit, rootGetters, getters, dispatch }) {
        if (getters.info.projectPath == undefined) {
            dispatch("initProjectData");
        }

        const { projectPath } = getters.info;

        const object = {
            path: projectPath,
            order: "project.order",
            callback: actions.$_readProjectCallback(commit)
        };
        const unsnap = common.fb.snap(object);
        commit("setUnsnap", unsnap);
    },
    /**
     * プロジェクト読み込み時Firebaseからcallbackされる後処理
     * @param {*} commit
     */
    $_readProjectCallback(commit) {
        return querySnapshot => {
            let array = [];
            //Projectデータ取得してArrayにつめこむ
            querySnapshot.forEach(function(doc) {
                let result = doc.data();
                result.project.id = doc.id;
                array.push(result);
            });
            //完了
            commit("setData", array);
        };
    },
    /**=============================
     * プロジェクト名更新
     * @param {*} param0
     * @param {*} value
     =============================*/
    async updateProjectName({ getters }, value) {
        const { projectPath } = getters.info;
        const name = value.name;
        const object = {
            path: projectPath + value.id,
            content: { project: { label: name } }
        };
        await common.fb.setDoc(object);
    },
    /***=============================
     * 削除
     * @param {*} param0
     * @param {*} id
     *============================= */
    async delete({ getters }, id) {
        const { projectPath } = getters.info;
        //パスの設定
        const projectDocPath = projectPath + id;
        //ボード全取得
        const { boardDataArray, boardsPath } = await actions.$_getAllBoards(
            projectDocPath
        );
        //ボードにぶらさがっているModuleとtaskの処理
        await actions.$_deleteBoardsAndTasks(boardDataArray, boardsPath);
        //project削除
        actions.$_deleteProject(projectDocPath);
    },
    /**
     * 全ボード取得
     * @param {} projectDocPath
     */
    async $_getAllBoards(projectDocPath) {
        const boardsPath = projectDocPath + "/boards/";
        const boardDataArray = await common.fb.get({
            path: boardsPath,
            key: "board"
        });
        return { boardDataArray, boardsPath };
    },
    /**
     * ボード内の削除
     * @param {*} boardDataArray
     * @param {*} boardsPath
     */
    async $_deleteBoardsAndTasks(boardDataArray, boardsPath) {
        let i = 0;

        for (i = 0; i < boardDataArray.length; i++) {
            //値の設定
            let boardsID = boardDataArray[i].board.id;
            let boardDocPath = boardsPath + boardsID;
            let tasksPath = boardDocPath + "/tasks/";
            //残存タスクモジュールがあれば消す
            actions.$_deleteTaskModules(boardsID);
            //taskを読み込む
            await actions.$_deleteTasks(tasksPath);
            //Board削除
            actions.$_deleteBoards(boardDocPath);
        }
    },
    /**
     * TaskModuleの削除
     * @param {*} boardsID
     */
    $_deleteTaskModules(boardsID) {
        let storeModuleName = "task_" + boardsID;
        let hasModule = store.state.hasOwnProperty(storeModuleName);
        if (hasModule) {
            store.unregisterModule(storeModuleName);
        }
    },
    /**
     * Taskの削除
     * @param {*} taskDataArray
     * @param {*} tasksPath
     */
    async $_deleteTasks(tasksPath) {
        const taskDataArray = await common.fb.get({
            path: tasksPath,
            key: "task"
        });
        for (let j = 0; j < taskDataArray.length; j++) {
            //Task削除
            let taskId = taskDataArray[j].task.id;
            let object = { path: tasksPath + taskId };
            common.fb.deleteDoc(object);
        }
    },
    /**
     * ボードの削除
     * @param {*} boardDocPath
     */
    $_deleteBoards(boardDocPath) {
        let object = { path: boardDocPath };
        common.fb.deleteDoc(object);
    },
    /**
     * プロジェクト削除
     * @param {*} projectDocPath
     */
    $_deleteProject(projectDocPath) {
        const object = { path: projectDocPath };
        common.fb.deleteDoc(object);
    },
    /**=========================================================
	 * ドラッグ&ドロップによる更新関連
	/**=========================================================
	 * ドラッグして追加されたので、旧リストからデータを引き継ぎ元を消す
	 * @param {*} param0 
	 * @param {*} value 
	 =============================*/
    async dragSortUpdate({ getters }, value) {
        const { projectPath } = getters.info;
        const projectId = value.id;
        const projectDocPath = projectPath + projectId;
        const order = common.util.getOrder(
            projectId,
            getters.projects,
            "project"
        );
        const object = {
            path: projectDocPath,
            content: { project: { order: order } }
        };
        await common.fb.setDoc(object);
    }
};

//-----------------------------------------------
//methods: action.create

export default actions;
