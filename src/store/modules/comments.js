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
		createComment(taskId){
		
			let resultNumber;
		
			return resultNumber;
		},
		deleteComment(commentId,taskId){
		
			let resultBoolean;
		
			return resultBoolean;
		},
		updateComment(commentId,commentData){
		
			let resultBoolean;
		
			return resultBoolean;
		},

	}
	actions: {
	},
	modules: {
	}
})