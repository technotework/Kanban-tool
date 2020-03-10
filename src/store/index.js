import Vue from 'vue'
import Vuex from 'vuex'
import Firebase from "@/vender/firebase"
import app from './modules/app'
import boards from './modules/boards'
import projects from './modules/projects'
import tasks from './modules/tasks'
import auth from './modules/auth'
import message from './modules/message'
import user from './modules/user'
import members from './modules/members'
import team from './modules/team'

Vue.use(Vuex);
Firebase.init();

Vue.config.productionTip = false;
const db = Firebase.db();
const st = Firebase.st();
const fn = Firebase.fn('us-central1');
export { db, st, fn };


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
		fn: (state) => {
			return Firebase.fn('us-central1');
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
		members,
		team
	}
})