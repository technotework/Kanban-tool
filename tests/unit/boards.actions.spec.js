//import boards from "@/store/modules/boards";
import { actions } from "@/store/modules/boards";
import { rootGetters } from "../mock/mockRootGatters";
import common from "@/store/common";
import { db, st, fn, fb } from "@/vender/firebase";
/**=========================================
 * 初期設定
 =========================================*/
/**
 * 初期化
 */
jest.mock("@/store/index", () => {
    const Vue = require("vue");
    const Vuex = require("vuex");
    Vue.use(Vuex);
    return new Vuex.Store({ state: { task_abc: {} } });
});
jest.mock("@/vender/firebase");
db.mockReturnValue(jest.fn());
st.mockReturnValue(jest.fn());
fn.mockReturnValue(jest.fn());
fb.mockReturnValue(jest.fn());

const path = "workspace/VlLhkwvK65svqmtJynUe/teams/4ZO9rAlLJTQuB2Oz0YRq/projects/";

jest.mock("@/store/common");
/**=========================================
 * DB
 =========================================*/
/**
 * BoardDataの読み込み
 */
describe("Board", () => {
    /**
     * initBoardData
     */
    test("initBoardData", () => {
        const commit = jest.fn();
        actions.initBoardData({ commit, rootGetters }, "abcd");
        expect(commit).toHaveBeenCalledWith("setAppInfo", {
            projectId: "abcd",
            projectDocPath: path + "abcd",
            boardPath: path + "abcd" + "/boards/"
        });
    });
    /**
     * create
     */
    test("create", async () => {
        const commit = jest.fn();
        common.fb.add.mockReturnValue({
            data: () => {
                return {
                    id: "doc_id"
                };
            }
        });
        const getters = {
            info: {
                projectId: "abcd",
                projectDocPath: path + "abcd",
                boardPath: path + "abcd" + "/boards/"
            }
        };
        const doc = await actions.create({ commit, getters });

        expect(doc.data().id).toBe("doc_id");
        expect(commit).toHaveBeenCalledWith("setUpdateDate");
    });
    /**
     *read
     */
    test("read", async () => {
        const commit = jest.fn();
        const dispatch = jest.fn();

        const getters = {
            info: {
                projectId: "abcd",
                projectDocPath: path + "abcd",
                boardPath: path + "abcd" + "/boards/"
            }
        };
        await actions.read({
            commit,
            rootGetters,
            getters,
            dispatch
        });
    });
});
