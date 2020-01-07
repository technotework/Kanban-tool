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
		createTask(boardId){
		
			let resultNumber;
		
			return resultNumber;
		},
		moveTask(taskId,fromBoardId,toBoardId){
		
			let resultNumber;
		
			return resultNumber;
		},
		deleteTask(taskId,boardId){
		
			let resultBoolean;
		
			return resultBoolean;
		},
		archiveTask(taskId,boardId = 0){
		
			let resultBoolean;
		
			return resultBoolean;
		},
		searchTask(query=''){
		
			let resultArray;
		
			return resultArray;
		},
		readTask(taskId){
		
			let resultObject;
		
			return resultObject;
		},
		updateTaskInfo(taskId,taskData){
		
			let resultBoolean;
		
			return resultBoolean;
		},

	}
	actions: {
	},
	modules: {
	}
})