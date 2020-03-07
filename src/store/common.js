import { db, st } from "@/store/index"
import { TYPE, APP } from "@/containers/resorces/message"
let unit = 10000000;

const util = {

  /**==================================
   * テンプレート
   ==================================*/
  templates: {
    user: (contract, team, altId) => {

      let obj = {
        "contracts": {
        },
        "altId": `${altId}`,
        "isDeleted": false,
        "nickname": "",
        "img": false,
        "role": "manager"
      }

      obj.contracts[contract] = [team];
      return obj;
    },
    project: (date, order) => {

      return {
        "project": {
          "id": "",
          "label": "Project",
          "update_date": `${date}`,
          "order": order
        }
      }
    },
    board: (order) => {

      return {
        "board": {
          "id": "",
          "order": order,
          "label": "NewBoard",
        }
      }
    },
    initialBoards: () => {

      return [
        {
          "board": {
            "id": "",
            "label": "Backlog",
            "order": unit
          }
        },
        {
          "board": {
            "id": "",
            "label": "ToDo",
            "order": unit * 2
          }
        },
        {
          "board": {
            "id": "",
            "label": "Progress",
            "order": unit * 3
          }
        },
        {
          "board": {
            "id": "",
            "label": "Complete",
            "order": unit * 4
          }
        }
      ];
    },
    task: (uuid, date, order = null, data = null) => {

      let ordarData;
      if (order != null) {
        ordarData = order;
      }
      else {
        ordarData = unit;
      }

      let content;
      if (data != null) {

        content = data;
      } else {

        content = "";
      }

      return {
        task: {
          "id": "",
          "data": content,
          "order": ordarData,
          "labels": [],
          "members": [],
          "editing": "",
          "createUser": `${uuid}`,
          "create_date": `${date}`,
          "start_date": null,
          "end_date": null,
          "archive_date": null,
          "comments": []
        }
      };
    }
  },
  /**==================================
   * firebaseWrapper
   ==================================*/
  fb: {
    /**
     * CollectionAdd
     */
    add: (object) => {
      return new Promise(async (resolve, reject) => {

        if (!navigator.onLine) {
          throw { type: TYPE.NETWORK, error: APP.DISCONNECT };
        }

        let { path, content } = object;
        let collection = db.collection(path);

        await collection.add(content).then((doc) => {

          resolve(doc);

        }).catch(error => {

          throw { type: TYPE.FIREBASE_FIRESTORE, error: error.code };
        });

      });

    },
    /**
     * collection get
     */
    get: (object) => {
      return new Promise(async (resolve, reject) => {

        if (!navigator.onLine) {
          reject();
          throw { type: TYPE.NETWORK, error: APP.DISCONNECT };
        }

        let { path, key } = object;
        let collection = db.collection(path);
        await collection.get().then((querySnapshot) => {
          let array = [];
          querySnapshot.forEach((doc) => {

            let data = doc.data();
            data[key].id = doc.id;
            array.push(data);
          });
          resolve(array);

        }).catch(error => {

          throw { type: TYPE.FIREBASE_FIRESTORE, error: error.code };
        });

      });
    },
    /**
     * DocumentSet
     */
    setDoc: (object) => {
      return new Promise(async (resolve, reject) => {

        if (!navigator.onLine) {
          reject();
          throw { type: TYPE.NETWORK, error: APP.DISCONNECT };
        }

        let { path, content } = object;
        let doc = db.doc(path);

        await doc.set(content, { merge: true }).then(() => {
          resolve();

        }).catch(error => {

          throw { type: TYPE.FIREBASE_FIRESTORE, error: error.code };
        });

      });
    },
    /**
     * getDoc
     */
    getDoc: (object) => {
      return new Promise(async (resolve, reject) => {

        if (!navigator.onLine) {
          reject();
          throw { type: TYPE.NETWORK, error: APP.DISCONNECT };
        }
        let { path } = object;
        let doc = db.doc(path);
        await doc.get().then((doc) => {

          resolve(doc);

        }).catch(error => {

          throw { type: TYPE.FIREBASE_FIRESTORE, error: error.code };
        });

      });
    },
    /**
     * documentDelete
     */
    deleteDoc: (object) => {

      return new Promise(async (resolve, reject) => {

        if (!navigator.onLine) {
          reject();
          throw { type: TYPE.NETWORK, error: APP.DISCONNECT };
        }

        let { path } = object;
        let doc = db.doc(path);
        await doc.delete().then(() => {

          resolve();

        }).catch(error => {

          throw { type: TYPE.FIREBASE_FIRESTORE, error: error.code };
        });

      });
    },
    /**
     * upload
     */
    upload: (object) => {

      return new Promise(async (resolve, reject) => {

        if (!navigator.onLine) {
          reject();
          throw { type: TYPE.NETWORK, error: APP.DISCONNECT };
        }
        let { path, content } = object;

        let strorage = st.ref().child(path);
        //アップロード
        await strorage.put(content).then(() => {
          resolve();
        }).catch(error => {
          throw { type: TYPE.FIREBASE_STORAGE, error: error.code };
        });

      });
    },
    /**
     * ダウンロード実行
     * @param {*} id 
     */
    execDownloadIcon: (id) => {

      return new Promise(async (resolve, reject) => {

        if (!navigator.onLine) {
          reject();
          throw { type: TYPE.NETWORK, error: APP.DISCONNECT };
        }

        let ref = st.ref(id + '/icon');
        let url = await ref.getDownloadURL();
        let response = await fetch(url);
        resolve(response);

      }, (error) => {
        throw { type: TYPE.FIREBASE_STORAGE, error: error.code };
      });
    }
  },
  /**==================================
   * util
   ==================================*/
  util: {

    /**
     * 自分のorderを算出
     * @param {*} id 
     * @param {*} array(projects,boards,tasks) 
     * @param {*} key:String (projects,boards,tasks) 
     */
    getOrder: (id, array, key) => {

      let prevOrder, nextOrder, myOrder = null;

      //新規
      //新規で自分しかいない
      if (id == null && array.length == 0) {

        myOrder = unit;
      }
      //自分が先頭で後ろにいる
      else if (id == null && array.length > 0) {

        prevOrder = 0;

        nextOrder = array[0][key].order;
      }
      //新規じゃない
      else {

        //indexを特定
        let myIndex;
        for (let i = 0; i < array.length; i++) {

          if (array[i][key].id == id) {

            myIndex = i;
          }
        }
        console.log(myIndex);
        //前後のindexを特定
        let prev = myIndex - 1;
        let next = myIndex + 1;


        //新規じゃないが自分しかいない
        if (myIndex == 0 && array.length == 1) {

          myOrder = unit;
        }
        //自分が先頭
        else if (myIndex == 0 && array.length > 1) {

          prevOrder = 0;
          nextOrder = array[next][key].order;
        }
        //自分が末端
        else if (myIndex == array.length - 1 && array.length > 1) {

          prevOrder = array[prev][key].order;
          myOrder = prevOrder + unit;
        }
        //自分の前後にいる
        else {
          prevOrder = array[prev][key].order;
          nextOrder = array[next][key].order;
        }

      }

      if (myOrder == null) {
        myOrder = prevOrder + (nextOrder - prevOrder) / 2;
        myOrder = prevOrder + (nextOrder - prevOrder) / 2;
      }
      return myOrder;
    }


  }
};

export default util;