import { createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import storeConfig from "../mock/store-config";
import { cloneDeep } from "lodash";
import storeMock from "../mock/store";
import dbBridge from "@/vender/dbBridge";
import { actions } from "@/store/modules/utils";

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

async function setInitialFBData() {
    await db()
        .doc("users/cTJUncptCPOMCJj9NHWq9ubIgMW2")
        .set({
            altId: "23ac86c5-8f58-44b1-b823-ca2856ba5de2",
            contracts: {
                contractId: ["teamId"]
            },
            img: true,
            nickname: "Lucas"
        });
    await db()
        .doc("workspace/contractId/teams/teamId/")
        .set({
            label: "MY TEAM"
        });

    await db()
        .doc("workspace/contractId/teams/teamId/projects/projectId1/")
        .set({
            project: {
                id: "",
                label: "Project",
                update_date: 1586815182,
                order: 2812500
            }
        });

    await db()
        .doc("workspace/contractId/teams/teamId/projects/projectId1/boards/boardId1/")
        .set({
            board: {
                id: "",
                order: 2812500,
                label: "NewBoard"
            }
        });

    await db()
        .doc("workspace/contractId/teams/teamId/projects/projectId1/boards/boardId1/tasks/taskId1")
        .set({
            task: {
                id: "",
                data: "content",
                order: 2812500,
                labels: [],
                members: [],
                editing: "",
                editing_date: null,
                createUser: "23ac86c5-8f58-44b1-b823-ca2856ba5de2",
                create_date: 1586815182,
                start_date: null,
                end_date: null,
                archive_date: null,
                comments: []
            }
        });

    return true;
}
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
            await setInitialFBData();
            //Vuex初期化
            store = new Vuex.Store(cloneDeep(storeConfig));
            //VuexをMock
            storeMock.mockImplementationOnce(() => {
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
                const data = store.getters["boards/boards"];
                //チェック
                expect(data[0].board.label).toBe("NewBoard");
                store.dispatch("app/unregistModule", "task_boardId1");
                done();
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
            await setInitialFBData();
            //Vuex初期化
            store = new Vuex.Store(cloneDeep(storeConfig));
            //VuexをMock
            storeMock.mockImplementationOnce(() => {
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
    });
});
