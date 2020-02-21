import Vue from 'vue'
import Vuex from 'vuex'
import Firebase from "@/firebase"
import app from './modules/app'
import boards from './modules/boards'
import projects from './modules/projects'
import tasks from './modules/tasks'
import auth from './modules/auth'

Vue.use(Vuex);
Firebase.init();

Vue.config.productionTip = false;

export default new Vuex.Store({
	strict: true,
	state: {
	},
	getters: {
		firebase: (state) => {
			return Firebase.firebase;
		},
		db: (state) => {
			return Firebase.db();
		},

	},
	modules: {
		app,
		auth,
		projects,
		boards,
		tasks
	}
})