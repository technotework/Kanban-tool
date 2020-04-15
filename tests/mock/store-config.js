import boards from "@/store/modules/boards/boards";
import projects from "@/store/modules/projects/projects";
import app from "./app";
import auth from "./auth";
import members from "./members";
import user from "./user";
import utils from "@/store/modules/utils";

export default {
    namespaced: true,
    modules: { app, auth, members, user, boards, projects, utils }
};
