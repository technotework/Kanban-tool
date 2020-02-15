import project from "../../src/store/modules/projects/"
import { state, mutations, getters, actions } from "../../src/store/modules/projects"
import Vuex from 'vuex'
import Firebase from "../../src/firebase"
import { createLocalVue } from '@vue/test-utils'

const localVue = createLocalVue()
localVue.use(Vuex)

let rootGetters;

beforeAll(() => {

  let app = Firebase.initApp();
  let db = Firebase.db();
  rootGetters = {
    "firebase": app,
    "db": db,
    "auth/user": {
      role: "manager",
      nickname: "ねこ",
      uuid: "AzjzROft7NNxQIHgD1YYTVASnnp2"
    },
    "auth/contract": "C1s25ymrqZUpS0WzqqoU",
    "auth/team": "6snw7RU3yAYjYeHU4p2A"
  }
});

describe('Projects action', () => {
  test('projectDataの読み込み', async (done) => {

    let store = new Vuex.Store(project);
    let commit = store.commit;

    await actions.read({ commit, rootGetters });
    expect(state.projectData).toBe("あ");
    done();

  })
})
