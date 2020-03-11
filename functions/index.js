const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();

exports.postProcess = functions.region('us-central1').https.onCall(async (data, context) => {

  let projectDoc = data.projectDocPath;
  let taskDocPathArray = data.taskDocPaths;
  let projectUpdateDate = data.date;

  //Projectの更新日付を変更する処理
  if (projectUpdateDate != null) {
    let doc = db.doc(projectDoc);
    doc.set({ "project": { "update_date": projectUpdateDate } }, { merge: true });
  }

  //編集ロックしっぱなしを解消する処理
  if (taskDocPathArray.length > 0) {
    for (let i = 0; i < taskDocPathArray.length; i++) {
      let path = taskDocPathArray[i];
      console.log(path);
      let doc = db.doc(path);
      doc.set({ "task": { "editing": "", "editing_date": null } }, { merge: true });
    }
  }

});
