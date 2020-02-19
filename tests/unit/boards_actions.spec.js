import boards from "../../src/store/modules/boards"
import { state, mutations, getters, actions } from "../../src/store/modules/boards"
import Vuex from 'vuex'
import FB from "../../src/firebase";
import { createLocalVue } from '@vue/test-utils'

const isTest = false;
let firebase;
if (isTest) {
  firebase = require("@firebase/testing");
}

const localVue = createLocalVue();
localVue.use(Vuex)

let store = new Vuex.Store(boards);
let commit = store.commit;
let rootGetters;

/**
 * 初期化
 */
beforeAll(() => {

  let app, db;
  if (isTest) {
    app = firebase.initializeTestApp({
      projectId: "kanban-c1adc",
      auth: { uid: "AzjzROft7NNxQIHgD1YYTVASnnp2", email: "capekhome@gmail.com" }
    });
    db = app.firestore();

  } else {
    app = FB.initApp();
    db = FB.db();
  }

  /**
   * モックデータ
   */
  rootGetters = {
    "firebase": app,
    "db": db,
    "auth/user": {
      role: "manager",
      nickname: "ねこ",
      uuid: "AzjzROft7NNxQIHgD1YYTVASnnp2"
    },
    "auth/contract": "C1s25ymrqZUpS0WzqqoU",
    "auth/team": "6snw7RU3yAYjYeHU4p2A",
    "auth/path": "workspace/C1s25ymrqZUpS0WzqqoU/teams/6snw7RU3yAYjYeHU4p2A/projects/"
  }
});

/**
 * BoardDataの読み込み
 */
describe('Board action read', () => {
  test('Boardの読み込み', async (done) => {

    await actions.read({ commit, rootGetters }, "USQxuwsqOkICCmDfnABD");
    done();

  })
});


