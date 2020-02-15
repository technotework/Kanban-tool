import project from "../../src/store/modules/projects/"
import actions from "../../src/store/modules/projects/actions"
import state from "../../src/store/modules/projects/state"
import Vuex from 'vuex'
import Firebase from "../../src/firebase"
import { createLocalVue } from '@vue/test-utils'

const localVue = createLocalVue()
localVue.use(Vuex)

let rootGetters;

beforeAll(() => {

  let app = Firebase.initApp();
  let store = Firebase.db();
  rootGetters = {
    "firebase": app,
    "db": store,
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
  test('renders props.msg when passed', async (done) => {
    let st = new Vuex.Store(project);
    let commit = st.commit;
    await actions.read({ commit, rootGetters });
    expect(state.projectData).toBe("あ");
    done();

  })
})
