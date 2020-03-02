import Vue from 'vue'
import Vuex from 'vuex'
import Firebase from "@/firebase"
import app from './modules/app'
import boards from './modules/boards'
import projects from './modules/projects'
import tasks from './modules/tasks'
import auth from './modules/auth'
import message from './modules/message'
import user from './modules/user'
import members from './modules/members'

Vue.use(Vuex);
Firebase.init();

Vue.config.productionTip = false;
const db = Firebase.db();
const st = Firebase.st();
export { db, st };


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
		storage: (state) => {

			return Firebase.st();
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
		members
	}
})