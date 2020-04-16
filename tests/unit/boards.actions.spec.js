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
const projectId = "kanbandemovuexboards";

const teamPath = "workspace/contractId/teams/teamId/";

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
 * Test Board initialize
 =========================================*/
describe("boards", () => {
    describe("Board initialize", () => {
        /**=========================================
        * 初期化
        =========================================*/
        let store;
        beforeEach(async () => {
            await setInitialFBData(db);
            //Vuex初期化
            store = new Vuex.Store(cloneDeep(storeConfig));
            //VuexをMock
            storeMock.mockImplementation(() => {
                return store;
            });
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
         * ボード初期化
         */
        test("initBoardData", () => {
            //実行
            store.dispatch("boards/initBoardData", "projectId1");
            //チェック
            expect(store.getters["boards/info"].projectId).toBe("projectId1");
            expect(store.getters["boards/info"].projectDocPath).toBe(
                teamPath + "projects/projectId1"
            );
            expect(store.getters["boards/info"].boardPath).toBe(
                teamPath + "projects/projectId1/boards/"
            );
        });

        /**
         * ボード読み込み
         */
        test("read", done => {
            //Readが終わった後のcallback
            actions.completeReceiver.mockImplementationOnce(() => {
                setTimeout(() => {
                    const data = store.getters["boards/boards"];
                    //チェック
                    expect(data[0].board.label).toBe("NewBoard1");
                    store.dispatch("app/unregistModule", "task_boardId1");
                    done();
                }, 500);
            });
            //前処理
            store.dispatch("boards/initBoardData", "projectId1");
            //実行
            store.dispatch("boards/read");
        });
    });

    /**=========================================
     * Test Board Functions
     =========================================*/
    describe("Board Function", () => {
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
                done();
            });
            store.dispatch("boards/initBoardData", "projectId1");
            store.dispatch("boards/read");
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
         * ボード名変更
         */
        test("updateBoardName", async done => {
            //Readが終わった後のcallback
            actions.completeReceiver.mockImplementationOnce(() => {
                setTimeout(() => {
                    const data = store.getters["boards/boards"];
                    expect(data[0].board.label).toBe("UpdatedBoardName");
                    done();
                }, 500);
            });
            //実行
            await store.dispatch("boards/updateBoardName", {
                id: "boardId1",
                name: "UpdatedBoardName"
            });
        });
        /**
         * ボード削除
         */
        test("delete", async done => {
            //Readが終わった後のcallback
            actions.completeReceiver.mockImplementationOnce(() => {
                setTimeout(() => {
                    const data = store.getters["boards/boards"];
                    expect(data.length).toBe(1);
                    done();
                }, 500);
            });
            //実行
            await store.dispatch("boards/delete", "boardId1");
        });
        /**
         * ボード作成
         */
        test("create", async done => {
            //Readが終わった後のcallback
            actions.completeReceiver.mockImplementationOnce(() => {
                setTimeout(() => {
                    const data = store.getters["boards/boards"];
                    expect(data.length).toBe(3);
                    done();
                }, 500);
            });
            //実行
            await store.dispatch("boards/create");
        });
        /**
         * ボードならびかえ
         */
        test("dragSortUpdate", done => {
            //Readが終わった後のcallback
            actions.completeReceiver.mockImplementationOnce(() => {
                setTimeout(() => {
                    const data = store.getters["boards/boards"];
                    expect(data[0].board.order).toBe(5000000);
                    done();
                }, 1000);
            });
            //実行
            let array = store.state.boards.boardsData;
            //DragSortをシミュレーションするため配列入れ替え
            let tmp = array[0];
            array[0] = array[1];
            array[1] = tmp;
            store.dispatch("boards/dragSortUpdate", { id: "boardId2" });
        });
    });

    //end
});
