import store from "@/store/index";
import common from "@/store/common";
//--------------
//state
//--------------
const state = {
    appInfo: {},
    projectsData: [],
    unsnapshots: [],
};

//--------------
//mutations
//--------------
const mutations = {
    setData(state, payload) {
        state.projectsData = payload;
    },
    setAppInfo(state, payload) {
        state.appInfo = payload;
    },
    setUnsnap(state, payload) {
        state.unsnapshots.push(payload);
    },
    remove(state) {
        for (let i = 0; i < state.unsnapshots.length; i++) {
            state.unsnapshots[i]();
        }
        state.unsnapshots = [];
        state.appInfo = {};
        state.projectsData = [];
    },
};

//--------------
//getters
//--------------
const getters = {
    info(state) {
        return state.appInfo;
    },
    projects(state) {
        return state.projectsData;
    },
};

//--------------
//actions
//--------------
const actions = {
    initProjectData({ commit, rootGetters }) {
        const path = rootGetters["auth/path"];
        const uuid = rootGetters["auth/user"].uuid;

        const info = {
            uuid: uuid,
            projectPath: path,
        };
        commit("setAppInfo", info);
    },
    /**=============================
	 * 新規作成
	 * @param {*} param0 
	 =============================*/
    create({ getters, rootGetters }) {
        return new Promise(async (resolve, reject) => {
            const { uuid, projectPath } = getters.info;
            const date = Math.floor(new Date().getTime() / 1000);
            //Projectドキュメントをを追加します
            const projectDoc = await createProject(
                projectPath,
                date,
                getters.projects
            );
            //boardsドキュメントを作ります
            const firstBoardID = await createBoards(projectPath, projectDoc);

            //続けてタスクを先頭のボードに追加する
            const boardDocumentPath =
                projectPath + projectDoc.id + "/boards/" + firstBoardID.id;
            await createTasks(uuid, date, boardDocumentPath);

            resolve();
        });
    },
    /**=============================
	 * 読み込み
	 * @param {*} param0 
	 =============================*/
    read({ commit, rootGetters, getters, dispatch }) {
        return new Promise(
            (resolve, reject) => {
                if (getters.info.projectPath == undefined) {
                    dispatch("initProjectData");
                }

                const { projectPath } = getters.info;

                const object = {
                    path: projectPath,
                    order: "project.order",
                    callback: (querySnapshot) => {
                        let array = [];
                        //Projectデータ取得してArrayにつめこむ
                        querySnapshot.forEach(function (doc) {
                            let result = doc.data();
                            result.project.id = doc.id;
                            array.push(result);
                        });
                        //完了
                        commit("setData", array);
                    },
                };
                const unsnap = common.fb.snap(object);
                commit("setUnsnap", unsnap);
            },
            (error) => {
                //console.log(error);
            }
        );
    },
    /**
     * プロジェクト名更新
     * @param {*} param0
     * @param {*} value
     */
    updateProjectName({ getters }, value) {
        return new Promise(
            async (resolve, reject) => {
                const { projectPath } = getters.info;
                const name = value.name;
                const object = {
                    path: projectPath + value.id,
                    content: { project: { label: name } },
                };
                await common.fb.setDoc(object).catch(reject);
                resolve();
            },
            (error) => {
                //console.log(error);
            }
        );
    },
    /***=============================
     * 削除
     * @param {*} param0
     * @param {*} id
     *============================= */
    delete({ getters }, id) {
        return new Promise(
            async (resolve, reject) => {
                const { projectPath } = getters.info;

                //パスの設定
                const projectDocPath = projectPath + id;

                //ボード全取得
                const boardsPath = projectDocPath + "/boards/";
                const boardDataArray = await common.fb
                    .get({ path: boardsPath, key: "board" })
                    .catch(reject);

                //ボードにぶらさがっているModuleとtaskの処理
                let i = 0;
                let taskDataArray = [];
                for (i = 0; i < boardDataArray.length; i++) {
                    //値の設定
                    let boardsID = boardDataArray[i].board.id;
                    let boardDocPath = boardsPath + boardsID;
                    let tasksPath = boardDocPath + "/tasks/";

                    //残存モジュールがあれば消す
                    let storeModuleName = "task_" + boardsID;
                    let hasModule = store.state.hasOwnProperty(storeModuleName);
                    if (hasModule) {
                        store.unregisterModule(storeModuleName);
                    }
                    //taskを読み込む
                    taskDataArray = await common.fb.get({
                        path: tasksPath,
                        key: "task",
                    });

                    for (let j = 0; j < taskDataArray.length; j++) {
                        //Task削除
                        let taskId = taskDataArray[j].task.id;
                        let object = { path: tasksPath + taskId };
                        common.fb.deleteDoc(object).catch(reject);
                    }
                    //Board削除
                    let object = { path: boardDocPath };
                    common.fb.deleteDoc(object).catch(reject);
                }
                //project削除
                const object = { path: projectDocPath };
                common.fb.deleteDoc(object).catch(reject);
                resolve();
            },
            (error) => {
                //console.log(error);
            }
        );
    },
    /**=========================================================
	 * ドラッグ&ドロップによる更新関連
	/**=========================================================
	 * ドラッグして追加されたので、旧リストからデータを引き継ぎ元を消す
	 * @param {*} param0 
	 * @param {*} value 
	 =============================*/
    dragSortUpdate({ getters }, value) {
        return new Promise(
            async (resolve, reject) => {
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
                    content: { project: { order: order } },
                };
                await common.fb.setDoc(object).catch(reject);

                resolve();
            },
            (error) => {
                //console.log(error);
            }
        );
    },
};

//-----------------------------------------------
//methods: action.create

/**
 * Projectドキュメントを作成
 */
function createProject(path, date, projects) {
    return new Promise(
        async (resolve, reject) => {
            //順番の初期化
            const order = common.util.getOrder(null, projects, "project");
            //テンプレートの取得
            const initialTemplate = common.templates.project(date, order);
            //作成
            const object = {
                path: path,
                content: initialTemplate,
            };
            const data = await common.fb.add(object).catch(reject);
            resolve(data);
        },
        (error) => {
            //console.log(error);
        }
    );
}

/**
 * BoardDocumentを作成
 * @param {*} path
 * @param {*} projectDoc
 */
function createBoards(path, projectDoc) {
    return new Promise(
        async (resolve, reject) => {
            //テンプレ取得
            const array = common.templates.initialBoards();
            //作成
            for (let i = 0; i < array.length; i++) {
                let object = {
                    path: path + projectDoc.id + "/boards/",
                    content: array[i],
                };
                let data = await common.fb.add(object).catch(reject);
                resolve(data);
            }
        },
        (error) => {
            //console.log(error);
        }
    );
}

/**
 * 初期タスクを作成
 * @param {*} uuid
 * @param {*} date
 * @param {*} boardDocumentPath
 */
function createTasks(uuid, date, boardDocumentPath) {
    return new Promise(
        async (resolve, reject) => {
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
                content: initialTaskTemplate,
            };
            const data = await common.fb.add(object).catch(reject);
            resolve(data);
        },
        (error) => {
            //console.log(error);
        }
    );
}

//-----------------------------------------------
export { state, mutations, getters, actions };
export default {
    namespaced: true,
    strict: true,
    state,
    mutations,
    getters,
    actions,
};
