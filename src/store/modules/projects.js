import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	strict: true,
	state: {
	},
	mutations: {
	},
	methods: {
		readProjectList() {

			let resultArray;

			return resultArray;
		},
		updateProjectName(name) {

			let resultString;

			return resultString;
		},
		deleteProject(projectId) {

			let resultBoolean;

			return resultBoolean;
		},
		createProject() {

			let resultBoolean;

			return resultBoolean;
		},
		readProject(projectId) {

			let resultBoolean;

			return resultBoolean;
		},

	},
	actions: {
	},
	modules: {
	}
})