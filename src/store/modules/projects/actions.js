export default {
  create() { },
  read({ commit, rootGetters }) {

    return new Promise((resolve, reject) => {

      let db = rootGetters.db;
      let collection = db.collection("workspace");
      collection.onSnapshot(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          console.log("aa", doc.data());
          commit("createJson", "あ");
          resolve();
          //commit("createJson", doc.data());
        });
      }, function (error) {
        console.log(error);
      });
    });

  },
  update() { },
  delete() { }
}