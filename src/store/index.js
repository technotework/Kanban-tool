import Vue from 'vue'
import Vuex from 'vuex'
import Firebase from "@/firebase"
import Boards from './modules/boards'
import Projects from './modules/projects'
import Tasks from './modules/tasks'
import Auth from './modules/auth'

Vue.use(Vuex);
Firebase.init();
let fireStore = Firebase.firebase.firestore;
let db = Firebase.db();

Vue.config.productionTip = false;
export default new Vuex.Store({
	modules: {
		Auth,
		Projects,
		Boards,
		Tasks
	}
})