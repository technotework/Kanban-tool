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
		readTaskMemberList(taskId){
		
			let resultArray;
		
			return resultArray;
		},
		deleteTaskMember(memberId,taskId){
		
			let resultBoolean;
		
			return resultBoolean;
		},
		updateTaskMember(memberArray,taskId){
		
			let resultBoolean;
		
			return resultBoolean;
		},

	}
	actions: {
	},
	modules: {
	}
})