

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
		console.log("aaaaaaaaaa", payload);
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
			let date = new Date().getTime() / 1000;

			let initialTemplate = {
				"project": {
					id: "",
					label: "Project",
					update_date: `${date}`,
					"boards": [
						{
							"id": `${getUUID()} `,
							"title": "backlog",
							"taskList": [
								{
									"id": `${getUUID()}`,
									"data": "バックログ",
									"labels": [],
									"createUser": `${uuid}`,
									"create_date": `${date}`,
									"start_date": null,
									"end_date": null,
									"archive_date": null,
									"comments": []
								}
							]
						},
						{
							"id": `${getUUID()} `,
							"title": "toDo",
							"taskList": [
								{
									"id": `${getUUID()}`,
									"data": "これからやるタスク",
									"labels": [],
									"createUser": `${uuid}`,
									"create_date": `${date}`,
									"start_date": null,
									"end_date": null,
									"archive_date": null,
									"comments": []
								}
							]
						},
						{
							"id": `${getUUID()} `,
							"title": "Progress",
							"taskList": [
								{
									"id": `${getUUID()}`,
									"data": "進行中のタスク",
									"labels": [],
									"createUser": `${uuid}`,
									"create_date": `${date}`,
									"start_date": null,
									"end_date": null,
									"archive_date": null,
									"comments": []
								}
							]
						},
						{
							"id": `${getUUID()} `,
							"title": "complete",
							"taskList": [
								{
									"id": `${getUUID()}`,
									"data": "完了したタスク",
									"labels": [],
									"createUser": `${uuid}`,
									"create_date": `${date}`,
									"start_date": null,
									"end_date": null,
									"archive_date": null,
									"comments": []
								}
							]
						}
					]
				}
			};

			let collection = db.collection(path);
			collection.add(initialTemplate).then((doc) => {
				collection.doc(doc.id).get().then((doc) => {

					let result = doc.data();
					result.project.id = doc.id;

					resolve();
				});
			});
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
	delete() { }
}

export { state, mutations, getters, actions }
export default {
	namespaced: true,
	strict: true,
	state,
	mutations,
	getters,
	actions
}