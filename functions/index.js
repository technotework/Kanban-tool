const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();

let unit = 10000000;

exports.postProcess = functions.region('us-central1').https.onCall(async (data, context) => {

  let projectDoc = data.doc;
  let userId = data.id;
  let boardsPath = projectDoc + "/boards/";
  //ボードのドキュメント配列
  let boardsDocs = await getCollection("board", boardsPath, "board.order");
  let allBoard = boardsDocs.all;
  let obj = {};

  for (let i = 0; i < allBoard.length; i++) {

    let doc = allBoard[i];
    let boardDocId = doc.board.id;
    let path = boardsPath + boardDocId + "/tasks/";
    let taskDocs = await getCollection("task", path, "task.order", userId);
    obj[boardDocId] = taskDocs;
  }
  taskUpdateEditorTransaction(obj, boardsPath)

});

function getCollection(key, path, order, userid = null) {

  return new Promise(async (resolve, reject) => {

    let i = 0;

    let collection = db.collection(path);
    await collection.orderBy(order).get().then((querySnapshot) => {
      let orderArray = [];
      let editingArray = [];
      querySnapshot.forEach((doc) => {
        i++;
        let data = doc.data();

        data[key].id = doc.id;
        //orderリセット処理
        data[key].order = i * unit;

        //(タスク用)自分が操作中の場合の消し込み処理
        if (key == "task" && userid != null) {
          if (data[key].editing == userid) {
            editingArray.push(data);
          }
        }

        orderArray.push(data);
      });
      resolve({ all: orderArray, editor: editingArray });
    });

  });
}

function taskUpdateEditorTransaction(taskObj, boardsPath) {

  db.runTransaction(function (transaction) {

    for (const key in taskObj) {

      let boardDocId = key;
      let updatedTasks = taskObj[key].editor;

      if (updatedTasks.length > 0) {

        for (let i = 0; i < updatedTasks.length; i++) {
          let taskData = updatedTasks[i];
          let taskId = taskData.task.id;
          let path = boardsPath + boardDocId + "/tasks/" + taskId;
          console.log(path);
          return transaction.update(path, { "task": { "editing": "", "editing_date": null } });
        }
      }
    }

  });
}