//--------------
//state
//--------------
const state = {
	projectsData: []
}

//--------------
//mutations
//--------------
const mutations = {

	setData(state, payload) {
		state.projectsData = payload;
	}
}

//--------------
//getters
//--------------
const getters = {

	projects(state) {
		return state.projectsData;
	}
}

//--------------
//actions
//--------------
const uuidv4 = require('uuid/v4');
const actions = {

	//新規作成
	create({ commit, rootGetters }) {

		return new Promise((resolve, reject) => {

			let getUUID = () => uuidv4();

			let uuid = rootGetters["auth/user"].uuid;
			let db = rootGetters.db;
			let path = rootGetters["auth/path"];
			let date = Math.floor(new Date().getTime() / 1000);

			let initialTemplate = {
				"project": {
					"id": "",
					"label": "Project",
					"update_date": `${date}`,
					"boards_sort": []
				}
			};

			let initialBoardOrder = [
				"Backlog", "ToDo", "Progress", "Complete"
			];

			let initialBoardsTemplate = [{
				"id": "",
				"title": "Backlog",
				"task_sort": []
			},
			{
				"id": "",
				"title": "ToDo",
				"task_sort": []
			},
			{
				"id": "",
				"title": "Progress",
				"task_sort": []
			},
			{
				"id": "",
				"title": "Complete",
				"task_sort": []
			}
			];

			let initialTaskTemplate =
			{
				"id": "",
				"data": "",
				"labels": [],
				"createUser": `${uuid}`,
				"create_date": `${date}`,
				"start_date": null,
				"end_date": null,
				"archive_date": null,
				"comments": []
			};

			let collection = db.collection(path);
			collection.add(initialTemplate).then((doc) => {

				collection.doc(doc.id).get()
					.then((doc) => {

						//続けてboardsドキュメントを作る
						let collection = db.collection(path + doc.id + "/boards/");
						let array = initialBoardsTemplate;
						let orderArray = [];

						for (let i = 0; i < array.length; i++) {

							collection.add(array[i]).then((doc) => {

								//初期Orderを更新
								orderArray.push(doc.id);
							});
						}

						let parentProject = db.collection(path + doc.id);
						parentProject.set({ "boards_sort": orderArray }, { merge: true });

					})
					.catch((error) => {
						reject();
					});
			});
		}, (error) => {
			console.log(error);
		});
	},
	//読み込み&リッスン
	read({ commit, rootGetters }) {

		return new Promise((resolve, reject) => {

			let db = rootGetters.db;
			let path = rootGetters["auth/path"];
			let collection = db.collection(path);

			collection.onSnapshot(function (querySnapshot) {

				let array = [];
				querySnapshot.forEach(function (doc) {

					let result = doc.data();
					result.project.id = doc.id;
					array.push(result);
				})

				commit("setData", array);
			});

		}, (error) => {
			console.log(error);
		});

	},
	update() { },
	delete({ commit, rootGetters }, id) {

		return new Promise((resolve, reject) => {

			let db = rootGetters.db;
			let path = rootGetters["auth/path"];
			let doc = db.collection(path).doc(id);
			doc.delete().then(function () {
				console.log("Document successfully deleted!");
			}).catch(function (error) {
				reject();
			});

		}, (error) => {
			console.log(error);
		});
	}
}

export {
	state,
	mutations,
	getters,
	actions
}
export default {
	namespaced: true,
	strict: true,
	state,
	mutations,
	getters,
	actions
}