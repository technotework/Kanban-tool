import Vue from "vue";
import Vuex from "vuex";
import Firebase from "@/vender/firebase";
import app from "./modules/app";
import boards from "./modules/boards/boards";
import projects from "./modules/projects/projects";
import tasks from "./modules/tasks/tasks";
import auth from "./modules/auth/auth";
import message from "./modules/message";
import user from "./modules/user";
import members from "./modules/members";
import team from "./modules/team";
import utils from "./modules/utils";

Vue.use(Vuex);
Firebase.init();

Vue.config.productionTip = false;

export default new Vuex.Store({
    strict: true,
    state: {},
    getters: {
        firebase: state => {
            return Firebase.firebase;
        }
    },
    modules: {
        app,
        auth,
        projects,
        boards,
        tasks,
        message,
        user,
        members,
        team,
        utils
    }
});
