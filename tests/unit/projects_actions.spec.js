import actions from "../../src/store/modules/projects/actions"
import Firebase from "../../src/firebase"
Firebase.init();

let rootGetters;

beforeAll(() => {

  rootGetters = {
    "firebase": Firebase.firebase,
    "db": Firebase.db(),
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
  it('renders props.msg when passed', () => {

    actions.read({ rootGetters });

  })
})
