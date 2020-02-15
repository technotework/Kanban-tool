export default {
  create() { },
  read({ commit, rootGetters }) {
    console.log(rootGetters)
    /* 
    let db = rootGetters.db;
    let collection = db.collection("wor");
    collection.onSnapshot(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        console.log(doc.data());

        commit("setName", doc.data());
      });
    });*/
  },
  update() { },
  delete() { }
}