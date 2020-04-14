import { st, fn, fb } from "@/vender/firebase";
import dbBridge from "@/vender/dbBridge";
import { TYPE, APP } from "@/containers/resorces/message";
const unit = 10000000;

const util = {
    /**==================================
   * テンプレート
   ==================================*/
    templates: {
        user: (contract, team, altId) => {
            const obj = {
                contracts: {},
                altId: `${altId}`,
                isDeleted: false,
                nickname: "",
                img: false,
                role: "manager"
            };

            obj.contracts[contract] = [team];
            return obj;
        },
        project: (date, order) => {
            return {
                project: {
                    id: "",
                    label: "Project",
                    update_date: date,
                    order: order
                }
            };
        },
        board: order => {
            return {
                board: {
                    id: "",
                    order: order,
                    label: "NewBoard"
                }
            };
        },
        initialBoards: () => {
            return [
                {
                    board: {
                        id: "",
                        label: "Backlog",
                        order: unit
                    }
                },
                {
                    board: {
                        id: "",
                        label: "ToDo",
                        order: unit * 2
                    }
                },
                {
                    board: {
                        id: "",
                        label: "Progress",
                        order: unit * 3
                    }
                },
                {
                    board: {
                        id: "",
                        label: "Complete",
                        order: unit * 4
                    }
                }
            ];
        },
        task: (uuid, date, order = null, data = null) => {
            let ordarData;
            if (order != null) {
                ordarData = order;
            } else {
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
                    id: "",
                    data: content,
                    order: ordarData,
                    labels: [],
                    members: [],
                    editing: "",
                    editing_date: null,
                    createUser: `${uuid}`,
                    create_date: date,
                    start_date: null,
                    end_date: null,
                    archive_date: null,
                    comments: []
                }
            };
        }
    },
    /**==================================
   * firebaseWrapper
   ==================================*/
    fb: {
        login: async object => {
            if (!navigator.onLine) {
                throw { type: TYPE.NETWORK, error: APP.DISCONNECT };
            }

            const { id, pass, callback } = object;
            let result;
            fb()
                .auth()
                .setPersistence(fb().auth.Auth.Persistence.SESSION);
            await fb()
                .auth()
                .signInWithEmailAndPassword(id, pass)
                .then(
                    auth => {
                        if (!auth.user.emailVerified) {
                            callback();
                            result = { type: "fail", uid: null, path: null };
                        } else {
                            let uid = auth.user.uid;
                            let path = "/projects";
                            result = { type: "succsess", uid: uid, path: path };
                        }
                    },
                    error => {
                        throw { type: "FIREBASE_AUTH", error: error.code };
                    }
                );
            return result;
        },
        /**
         * 新規登録
         */
        regist: async object => {
            if (!navigator.onLine) {
                throw { type: TYPE.NETWORK, error: APP.DISCONNECT };
            }

            const { id, pass, callback } = object;
            let result;
            await fb()
                .auth()
                .createUserWithEmailAndPassword(id, pass)
                .then(
                    auth => {
                        auth.user.sendEmailVerification();
                        callback();
                        result = auth.user.uid;
                    },
                    error => {
                        throw { type: "FIREBASE_AUTH", error: error.code };
                    }
                );
            return result;
        },
        /**
         * Logout
         */
        logout: async () => {
            if (!navigator.onLine) {
                throw { type: TYPE.NETWORK, error: APP.DISCONNECT };
            }
            await fb()
                .auth()
                .signOut()
                .then(() => {})
                .catch(error => {
                    throw { type: "FIREBASE_AUTH", error: error.code };
                });
            return true;
        },
        /**
         * snapshot
         */
        snap: object => {
            if (!navigator.onLine) {
                throw { type: TYPE.NETWORK, error: APP.DISCONNECT };
            }

            const { path, order, callback } = object;
            const db = dbBridge.getDb();
            const collection = db().collection(path);
            const unsnap = collection.orderBy(order).onSnapshot(async querySnapshot => {
                await callback(querySnapshot);
            });
            return unsnap;
        },
        /**
         * CollectionAdd
         */
        add: async object => {
            if (!navigator.onLine) {
                throw { type: TYPE.NETWORK, error: APP.DISCONNECT };
            }

            const { path, content } = object;
            const db = dbBridge.getDb();
            const collection = db().collection(path);
            let result;
            await collection
                .add(content)
                .then(doc => {
                    result = doc;
                })
                .catch(error => {
                    throw {
                        type: TYPE.FIREBASE_FIRESTORE,
                        error: error.code
                    };
                });
            return result;
        },
        /**
         * collection get
         */
        get: async object => {
            if (!navigator.onLine) {
                throw { type: TYPE.NETWORK, error: APP.DISCONNECT };
            }

            const { path, key } = object;
            const db = dbBridge.getDb();
            const collection = db().collection(path);
            let result;
            await collection
                .get()
                .then(querySnapshot => {
                    let array = [];
                    querySnapshot.forEach(doc => {
                        const data = doc.data();
                        data[key].id = doc.id;
                        array.push(data);
                    });
                    result = array;
                })
                .catch(error => {
                    throw {
                        type: TYPE.FIREBASE_FIRESTORE,
                        error: error.code
                    };
                });
            return result;
        },
        /**
         * DocumentSet
         */
        setDoc: async object => {
            if (!navigator.onLine) {
                throw { type: TYPE.NETWORK, error: APP.DISCONNECT };
            }

            const { path, content } = object;
            const db = dbBridge.getDb();
            const doc = db().doc(path);
            let result;
            await doc
                .set(content, { merge: true })
                .then(() => {
                    result = true;
                })
                .catch(error => {
                    throw {
                        type: TYPE.FIREBASE_FIRESTORE,
                        error: error.code
                    };
                });
            return result;
        },
        /**
         * DocumentSet
         */
        updateDoc: async object => {
            if (!navigator.onLine) {
                throw { type: TYPE.NETWORK, error: APP.DISCONNECT };
            }

            const { path, content } = object;
            const db = dbBridge.getDb();
            const doc = db().doc(path);
            let result;
            await doc
                .update(content)
                .then(() => {
                    result = true;
                })
                .catch(error => {
                    throw {
                        type: TYPE.FIREBASE_FIRESTORE,
                        error: error.code
                    };
                });
            return result;
        },
        /**
         * getDoc
         */
        getDoc: async object => {
            if (!navigator.onLine) {
                throw { type: TYPE.NETWORK, error: APP.DISCONNECT };
            }
            const { path } = object;
            const db = dbBridge.getDb();
            const doc = db().doc(path);
            let result;
            await doc
                .get()
                .then(doc => {
                    result = doc;
                })
                .catch(error => {
                    throw {
                        type: TYPE.FIREBASE_FIRESTORE,
                        error: error.code
                    };
                });
            return result;
        },
        /**
         * documentDelete
         */
        deleteDoc: async object => {
            if (!navigator.onLine) {
                throw { type: TYPE.NETWORK, error: APP.DISCONNECT };
            }
            const { path } = object;
            const db = dbBridge.getDb();
            const doc = db().doc(path);
            let result;
            await doc
                .delete()
                .then(() => {
                    result = true;
                })
                .catch(error => {
                    throw {
                        type: TYPE.FIREBASE_FIRESTORE,
                        error: error.code
                    };
                });
            return result;
        },
        /**
         * snapshot
         */
        snapDoc: object => {
            if (!navigator.onLine) {
                throw { type: TYPE.NETWORK, error: APP.DISCONNECT };
            }

            const { path, callback } = object;
            const db = dbBridge.getDb();
            const doc = db().doc(path);
            const unsnap = doc.onSnapshot(function(doc) {
                callback(doc);
            });
            return unsnap;
        },
        /**
         * upload
         */
        upload: async object => {
            if (!navigator.onLine) {
                throw { type: TYPE.NETWORK, error: APP.DISCONNECT };
            }
            const { path, content } = object;
            let result;
            const strorage = st()
                .ref()
                .child(path);
            //アップロード
            await strorage
                .put(content)
                .then(() => {
                    result = true;
                })
                .catch(error => {
                    throw {
                        type: TYPE.FIREBASE_STORAGE,
                        error: error.code
                    };
                });
            return result;
        },
        /**
         * ダウンロード実行
         * @param {*} id
         */
        execDownloadIcon: async id => {
            if (!navigator.onLine) {
                throw { type: TYPE.NETWORK, error: APP.DISCONNECT };
            }

            const ref = st().ref(id + "/icon");
            const url = await ref.getDownloadURL();
            const response = await fetch(url).catch(error => {
                throw { type: TYPE.FIREBASE_STORAGE, error: error.code };
            });
            return response;
        },
        /**
         * FirebaseFunctionsに後処理をなげる
         */
        postProcess: object => {
            fn().httpsCallable("postProcess")(object);
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
            let prevOrder,
                nextOrder,
                myOrder = null;

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
