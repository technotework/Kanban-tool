import { createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import storeConfig from "../mock/store-config";
import { cloneDeep } from "lodash";
import storeMock from "../mock/store";
import dbBridge from "@/vender/dbBridge";
import { actions } from "@/store/modules/utils";
import setInitialFBData from "../mock/fbdata";
/**=========================================
 * mock
 =========================================*/

const localVue = createLocalVue();
const firebase = require("@firebase/testing");
const projectId = "kanbandemovuexproducts";

const teamPath = "workspace/contractId/teams/teamId/";
const projectPath = "workspace/contractId/teams/teamId/projects/";
localVue.use(Vuex);
jest.mock("../mock/store");
jest.mock("@/store/modules/utils");
jest.mock("@/vender/dbBridge");
jest.setTimeout(30000);

/**=========================================
 * init
 =========================================*/
let db;
beforeAll(async () => {
    dbBridge.getDb.mockReturnValue(() => {
        const app = firebase.initializeAdminApp({
            projectId: projectId
        });
        return app.firestore();
    });

    db = dbBridge.getDb();
});
afterAll(async () => {
    await Promise.all(
        firebase.apps().map(app => app.delete()) //生成したアプリを削除
    );
});

/**=========================================
 * Test Tasks initialize
 =========================================*/
describe("Tasks", () => {
    describe("Tasks initialize", () => {
        /**=========================================
        * 初期化
        =========================================*/
        let store;
        beforeEach(async done => {
            await setInitialFBData(db);
            //Vuex初期化
            store = new Vuex.Store(cloneDeep(storeConfig));
            //VuexをMock
            storeMock.mockImplementation(() => {
                return store;
            });
            //READ Complete Callback Mock
            actions.completeReceiver.mockImplementationOnce(() => {
                setTimeout(() => {
                    done();
                }, 500);
            });
            store.dispatch("boards/initBoardData", "projectId1");
            store.dispatch("boards/read");
            //これによってtask_boardId1とtask_board2という動的モジュールができる
        });
        /**
         * 後処理
         */
        afterEach(async () => {
            // 使用したアプリの削除
            store.dispatch("app/remove");
            await firebase.clearFirestoreData({
                projectId: projectId
            });
        });
        /**=========================================
        * テスト
        =========================================*/
        /**
         * プロジェクト初期化
         */
        test("setInitialData", () => {
            //実行
            store.dispatch("task_boardId1/setInitialData", "boardId1");
            //チェック
            expect(store.getters["task_boardId1/info"].altid).toBe(
                "23ac86c5-8f58-44b1-b823-ca2856ba5de2"
            );

            expect(store.getters["task_boardId1/info"].boardDocPath).toBe(
                projectPath + "projectId1/boards/boardId1"
            );
            expect(store.getters["task_boardId1/info"].boardId).toBe("boardId1");
            expect(store.getters["task_boardId1/info"].boardPath).toBe(
                projectPath + "projectId1/boards/"
            );
            expect(store.getters["task_boardId1/info"].projectPath).toBe(
                projectPath + "projectId1"
            );
            expect(store.getters["task_boardId1/info"].taskPath).toBe(
                projectPath + "projectId1/boards/boardId1/tasks/"
            );
            expect(store.getters["task_boardId1/info"].uuid).toBe("cTJUncptCPOMCJj9NHWq9ubIgMW2");
        });

        /**
         * プロジェクト読み込み
         */
        test("read", done => {
            //Readが終わった後のcallback
            actions.completeReceiver.mockImplementationOnce(() => {
                setTimeout(() => {
                    const data = store.getters["task_boardId1/tasks"];
                    //チェック
                    expect(data[0].task.data).toBe("content1");
                    done();
                }, 500);
            });
            //前処理
            store.dispatch("task_boardId1/setInitialData", "boardId1");
            //実行
            store.dispatch("task_boardId1/read");
        });
        //
    });

    /**=========================================
     * Test Tasks Functions
     =========================================*/
    describe("Tasks Function", () => {
        /**=========================================
        * 初期化
        =========================================*/
        let store;
        beforeEach(async done => {
            await setInitialFBData(db);
            //Vuex初期化
            store = new Vuex.Store(cloneDeep(storeConfig));
            //VuexをMock
            storeMock.mockImplementation(() => {
                return store;
            });
            //初期化フロー
            //READ Complete Callback Mock
            actions.completeReceiver.mockImplementationOnce(() => {
                setTimeout(() => {
                    //2段目
                    actions.completeReceiver.mockImplementationOnce(() => {
                        done();
                    });
                    store.dispatch("task_boardId1/setInitialData", "boardId1");
                    store.dispatch("task_boardId1/read");
                }, 500);
            });
            store.dispatch("boards/initBoardData", "projectId1");
            store.dispatch("boards/read");
            //これによってtask_boardId1とtask_board2という動的モジュールができる
        });
        /**
         * 後処理
         */
        afterEach(async () => {
            // 使用したアプリの削除
            store.dispatch("app/remove");
            await firebase.clearFirestoreData({
                projectId: projectId
            });
        });
        /**=========================================
         * テスト
         =========================================*/
        /**
         * タスク作成
         */
        test("createTask", done => {
            //Readが終わった後のcallback
            actions.completeReceiver.mockImplementationOnce(() => {
                setTimeout(() => {
                    const data = store.getters["task_boardId1/tasks"];
                    //チェック
                    expect(data[0].task.data).toBe("NewTask");
                    done();
                }, 500);
            });
            //実行
            store.dispatch("task_boardId1/createTask", {
                value: "NewTask"
            });
        });
        /**
         * タスクをアップデート
         */
        test("updateTask", done => {
            //Readが終わった後のcallback
            actions.completeReceiver.mockImplementationOnce(() => {
                setTimeout(() => {
                    const data = store.getters["task_boardId1/tasks"];
                    //チェック

                    expect(data[0].task.data).toBe("updatedTask");
                    done();
                }, 500);
            });
            //実行
            store.dispatch("task_boardId1/updateTask", {
                value: "updatedTask",
                id: "taskId1_1"
            });
        });
        /**
         * メンバーをアップデート
         */
        test("updateMember", done => {
            //Readが終わった後のcallback
            actions.completeReceiver.mockImplementationOnce(() => {
                setTimeout(() => {
                    const data = store.getters["task_boardId1/tasks"];
                    //チェック
                    expect(data[0].task.members[0]).toBe("memberAltId");
                    done();
                }, 500);
            });
            //実行
            store.dispatch("task_boardId1/updateMember", {
                data: ["memberAltId"],
                id: "taskId1_1"
            });
        });
        /**
         * タスクを削除
         */
        test("deleteTask", done => {
            //Readが終わった後のcallback
            actions.completeReceiver.mockImplementationOnce(() => {
                setTimeout(() => {
                    const data = store.getters["task_boardId1/tasks"];
                    //チェック
                    expect(data[0].task.id).toBe("taskId1_2");
                    done();
                }, 500);
            });
            //実行
            store.dispatch("task_boardId1/deleteTask", {
                id: "taskId1_1"
            });
        });
        /**
         * 現在の編集者を追加
         */
        test("lockTask", done => {
            //Readが終わった後のcallback
            actions.completeReceiver.mockImplementationOnce(() => {
                setTimeout(() => {
                    const data = store.getters["task_boardId1/tasks"];
                    //チェック
                    expect(data[0].task.editing).toBe("23ac86c5-8f58-44b1-b823-ca2856ba5de2");
                    done();
                }, 500);
            });
            //実行
            store.dispatch("task_boardId1/lockTask", {
                id: "taskId1_1"
            });
        });
        /**
         * 現在の編集者を解除
         */
        test("unlockTask", done => {
            //Readが終わった後のcallback
            actions.completeReceiver.mockImplementationOnce(() => {
                setTimeout(() => {
                    const data = store.getters["task_boardId1/tasks"];
                    //ロックチェック
                    expect(data[0].task.editing).toBe("23ac86c5-8f58-44b1-b823-ca2856ba5de2");

                    //Readが終わった後のcallback 2段目
                    actions.completeReceiver.mockImplementationOnce(() => {
                        setTimeout(() => {
                            const data = store.getters["task_boardId1/tasks"];
                            //チェック
                            expect(data[0].task.editing).toBe("");
                            done();
                        }, 500);
                    });
                    //アンロックする
                    store.dispatch("task_boardId1/unlockTask", {
                        id: "taskId1_1"
                    });
                }, 500);
            });
            //前処理としてロックをかける
            store.dispatch("task_boardId1/lockTask", {
                id: "taskId1_1"
            });
        });
        /**
         * ボードのソート
         */
        test("dragSortUpdate", done => {
            //Readが終わった後のcallback
            actions.completeReceiver.mockImplementationOnce(() => {
                setTimeout(() => {
                    const data = store.getters["task_boardId1/tasks"];
                    expect(data[0].task.order).toBe(5000000);
                    done();
                }, 1000);
            });
            //前処理
            let array = store.getters["task_boardId1/tasks"];
            //DragSortをシミュレーションするため配列入れ替え
            let tmp = array[0];
            array[0] = array[1];
            array[1] = tmp;
            console.log(array[0].task.order, array[1].task.order);

            //実行
            store.dispatch("task_boardId1/dragSortUpdate", {
                id: "taskId1_2"
            });
        });
        /**
         * ドラッグして追加されたので、旧リストからデータを引き継ぎ元を消す
         */
        test("dragAdded", done => {
            //Readが終わった後のcallback
            actions.completeReceiver.mockImplementationOnce(() => {
                setTimeout(() => {
                    let board2Tasks = store.getters["task_boardId2/tasks"];
                    let board1Tasks = store.getters["task_boardId1/tasks"];

                    expect(board2Tasks.length).toBe(1);
                    expect(board1Tasks.length).toBe(3);
                    expect(board1Tasks[1].task.id).toBe("taskId2_2");
                    done();
                }, 500);
            });
            //前処理
            let board2Tasks = store.getters["task_boardId2/tasks"];
            let board1Tasks = store.getters["task_boardId1/tasks"];
            //BoardId2の[1]taskId2_2がboardId1の[1]に入ってきたイメージ
            //VuexのBoardId2配列上からはドラッグ後消え、BoardId1の配列に追加される
            //後追いでFirebaseを書き換えにいく。
            let task2_2_temp = board2Tasks[1];
            board2Tasks.splice(1, 1);
            board1Tasks.splice(1, 0, task2_2_temp);
            //実行
            store.dispatch("task_boardId1/dragAdded", {
                id: "taskId2_2",
                boardId: "boardId2"
            });
        });
        //
    });

    //end
});
