import { createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import storeConfig from "./store-config";
import dbBridge from "@/vender/dbBridge";
import { cloneDeep } from "lodash";

/**=========================================
 * mock
 =========================================*/
const fs = require("fs");
const localVue = createLocalVue();
const firebase = require("@firebase/testing");
const projectId = "kanbandemovuexboards";

localVue.use(Vuex);
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
                contractsId: ["teamId"]
            },
            img: true,
            nickname: "Lucas"
        });
    await db()
        .doc("workspace/contractsId/teams/teamId")
        .set({
            label: "MY TEAM"
        });

    await db()
        .doc("workspace/contractsId/teams/teamId/projects/projectId1")
        .set({
            project: {
                id: "",
                label: "Project",
                update_date: 1586815182,
                order: 2812500
            }
        });

    await db()
        .doc(
            "workspace/contractsId/teams/teamId/projects/projectId1/boards/boardId1"
        )
        .set({
            board: {
                id: "",
                order: 2812500,
                label: "NewBoard"
            }
        });

    await db()
        .doc(
            "workspace/contractsId/teams/teamId/projects/projectId1/boards/boardId1/tasks/taskId1"
        )
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
 * Test
 =========================================*/
describe("Board", () => {
    beforeEach(async () => {
        await setInitialFBData();
    });
    /**
     * 後処理
     */
    afterEach(async () => {
        // 使用したアプリの削除
        await firebase.clearFirestoreData({
            projectId: projectId
        });
    });

    test("initBoardData", () => {
        const localVue = createLocalVue();
        localVue.use(Vuex);
        const store = new Vuex.Store(cloneDeep(storeConfig));
        store.dispatch("initBoardData", "abc");

        expect(store.getters.info.projectId).toBe("abc");
    });

    test("read", () => {
        const localVue = createLocalVue();
        localVue.use(Vuex);
        const store = new Vuex.Store(cloneDeep(storeConfig));
        store.dispatch("read");
        console.log(store.getters.boards);
        //expect(store.getters.info.projectId).toBe("abc");
    });
});
