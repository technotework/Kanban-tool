/**
 * タスク管理
 */
import actions from "./actions";
import store from "@/store/index";
//--------------
//state
//--------------
function state() {
    return {
        appInfo: {},
        tasksData: [],
        isOpenEditor: false,
        parentBoardId: "",
        unsnapshots: []
    };
}

//--------------
//mutations
//--------------
const mutations = {
    initializeData(state, payload) {
        state.appInfo = payload;
    },
    setParentBoardId(state, payload) {
        state.parentBoardId = payload;
    },
    setTasksData(state, payload) {
        state.tasksData = payload;
    },
    setEditorOpen(state, payload) {
        state.isOpenEditor = payload;
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
        state.tasksData = [];
        state.isOpenEditor = false;
        state.parentBoardId = "";
    }
};

//--------------
//getters
//--------------
const getters = {
    info(state) {
        return state.appInfo;
    },
    tasks(state) {
        return state.tasksData;
    },
    isOpen(state) {
        return state.isOpenEditor;
    },
    boardId(state) {
        return state.parentBoardId;
    },
    editingDocPaths(state) {
        let result = [];
        const docs = state.tasksData;
        const myId = store.getters["auth/user"].altId;
        const taskPath = state.appInfo.taskPath;
        for (let i = 0; i < docs.length; i++) {
            if (docs[i].task.editing == myId) {
                let path = taskPath + docs[i].task.id;
                result.push(path);
            }
        }

        return result;
    }
};

export { state, mutations, getters, actions };
export default {
    namespaced: true,
    strict: true,
    state,
    mutations,
    getters,
    actions
};
