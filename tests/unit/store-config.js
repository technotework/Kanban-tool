import boards from "@/store/modules/boards/boards";
import projects from "@/store/modules/projects/projects";
export default {
    namespaced: true,
    strict: true,
    modules: { boards, projects }
};
