import project from "../../src/store/modules/projects/"
import { state, mutations, getters, actions } from "../../src/store/modules/projects"
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

let store = new Vuex.Store(project);
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
 * projectDataの新規作成
 */
describe.only('Projects action create', () => {
  test('projectDataの新規作成', async (done) => {

    await actions.create({ commit, rootGetters });
    done();

  })
})

/**
 * projectDataの読み込み
 */
describe('Projects action read', () => {
  test('projectDataの読み込み', async (done) => {

    await actions.read({ commit, rootGetters });
    done();

  })
})
