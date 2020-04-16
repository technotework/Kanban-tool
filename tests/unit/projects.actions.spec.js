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
 * Test Projects initialize
 =========================================*/
describe("projects", () => {
    describe("Projects initialize", () => {
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
         * プロジェクト初期化
         */
        test("initProjectData", () => {
            //実行
            store.dispatch("projects/initProjectData");
            //チェック
            expect(store.getters["projects/info"].projectPath).toBe(teamPath + "projects/");
            expect(store.getters["projects/info"].uuid).toBe("cTJUncptCPOMCJj9NHWq9ubIgMW2");
        });

        /**
         * プロジェクト読み込み
         */
        test("read", done => {
            //Readが終わった後のcallback
            setTimeout(() => {
                actions.completeReceiver.mockImplementationOnce(() => {
                    const data = store.getters["projects/projects"];
                    //チェック
                    expect(data[0].project.label).toBe("Project1");
                    done();
                }, 500);
            });
            //前処理
            store.dispatch("projects/initProjectData");
            //実行
            store.dispatch("projects/read");
        });
    });

    /**=========================================
     * Test Projects Functions
     =========================================*/
    describe("Projects Function", () => {
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
            store.dispatch("projects/initBoardData");
            store.dispatch("projects/read");
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
         * プロジェクト作成
         */
        test("create", async done => {
            //Readが終わった後のcallback
            actions.completeReceiver.mockImplementationOnce(() => {
                setTimeout(async () => {
                    const data = store.getters["projects/projects"];
                    //Projectが生成されているかどうか
                    expect(data[0].project.label).toBe("Project");
                    //Boardが生成されているかどうかFBに問い合わせ
                    //設定
                    const projectId = data[0].project.id;
                    const boardPath = teamPath + "projects/" + projectId + "/boards";
                    //実行
                    let boardIDs;
                    let boardData = await db()
                        .collection(boardPath)
                        .get()
                        .then(querySnapshot => {
                            let count = 0;
                            querySnapshot.forEach(doc => {
                                let name = doc.data().board.label;
                                count += name == "Backlog" ? 1 : 0;
                                count += name == "ToDo" ? 1 : 0;
                                count += name == "Complete" ? 1 : 0;
                                count += name == "Progress" ? 1 : 0;

                                if (name == "Backlog") {
                                    boardIDs = doc.id;
                                }
                            });
                            expect(count).toBe(4);
                        });
                    //設定
                    let taskPath =
                        teamPath + "projects/" + projectId + "/boards/" + boardIDs + "/tasks";
                    //実行
                    await db()
                        .collection(taskPath)
                        .get()
                        .then(querySnapshot => {
                            querySnapshot.forEach(doc => {
                                expect(doc.data().task.createUser).toBe(
                                    "cTJUncptCPOMCJj9NHWq9ubIgMW2"
                                );
                            });
                        });
                    done();
                }, 500);
            });
            //実行
            await store.dispatch("projects/create");
        });
        /**
         * プロジェクト名更新
         */
        test("updateProjectName", done => {
            //Readが終わった後のcallback
            actions.completeReceiver.mockImplementationOnce(() => {
                setTimeout(() => {
                    const data = store.getters["projects/projects"];
                    expect(data[0].project.label).toBe("updateProjectName");
                    done();
                }, 500);
            });
            //実行
            store.dispatch("projects/updateProjectName", {
                name: "updateProjectName",
                id: "projectId1"
            });
        });
        /**
         * 削除
         */
        test("delete", done => {
            //Readが終わった後のcallback
            actions.completeReceiver.mockImplementationOnce(() => {
                setTimeout(() => {
                    const data = store.getters["projects/projects"];
                    expect(data.length).toBe(1);
                    done();
                }, 500);
            });
            //実行
            store.dispatch("projects/delete", "projectId1");
        });
        /**
         * ドラッグ&ドロップによる更新関連
         */
        test("dragSortUpdate", done => {
            //Readが終わった後のcallback
            actions.completeReceiver.mockImplementationOnce(() => {
                setTimeout(() => {
                    const data = store.getters["projects/projects"];
                    expect(data[0].project.order).toBe(5000000);
                    done();
                }, 500);
            });
            //実行
            let array = store.state.projects.projectsData;
            //DragSortをシミュレーションするため配列入れ替え
            let tmp = array[0];
            array[0] = array[1];
            array[1] = tmp;
            store.dispatch("projects/dragSortUpdate", { id: "projectId2" });
        });
        //
    });

    //end
});
