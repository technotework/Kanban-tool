import Vue from 'vue'
import Vuex from 'vuex'
import Firebase from "@/firebase"
import app from './modules/app'

Vue.use(Vuex);
Firebase.init();
let fireStore = Firebase.firebase.firestore;
let db = Firebase.db();

Vue.config.productionTip = false;
export default new Vuex.Store({
	strict: true,
	namespaced: true,
	state: {
		docId: "",
		name: ""
	},
	mutations: {
		changeName(state, payload) {
			state.name = payload;
		},
		setDocId(state, payload) {
			state.docId = payload;
		}
	},
	getters: {
		getName(state) {

			return state.name;
		}
	},
	actions: {
		rename({ commit }, name) {

			let doc = db.collection("animal").doc("pet");
			console.log(doc);
			doc.update({ cat: name }).then(function () {
				commit("changeName", name);
			});

		},
		nameGet({ commit }) {
			db.collection("animal").get().then((querySnapshot) => {
				querySnapshot.forEach((doc) => {
					console.log(doc.id, doc.data());
					let obj = doc.data();
					let id = doc.id;
					commit("changeName", obj.cats[0]);
					commit("setDocId", id);
				});
			});
		},
		deleteArray({ commit }) {
			//配列のアップデート
			db.collection("animal").doc("pet").update({
				cats: fireStore.FieldValue.arrayRemove('しまねこ')
			});
		},
		updateArray({ commit }, value) {
			//配列のアップデート
			db.collection("animal").doc("pet").update({
				cats: fireStore.FieldValue.arrayRemove('しまねこ')
			});
		}
	},
})