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
		readTaskLabelList(taskId) {

			let resultArray;

			return resultArray;
		},
		deleteTaskLabel(labelId, taskId) {

			let resultBoolean;

			return resultBoolean;
		},
		updateTaskLabel(labelArray, taskId) {

			let resultBoolean;

			return resultBoolean;
		},

	},
	actions: {
	},
	modules: {
	}
})