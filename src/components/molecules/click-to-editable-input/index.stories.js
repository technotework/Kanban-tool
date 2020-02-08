import {
  createDefStory,
  createStory,
  tagTemp
} from "@/components/utils/story-creator";

import {
  text
} from "@/components/utils/story-export"
import ClickToEditableInput from "./index.vue";

let description = 'import ClickToEditableInput from "@/components/molecules/click-to-editable-input/"';
export default createDefStory("molecules/ClickToEditableInput", ClickToEditableInput, description);


//---------------------
//Basic

export const Basic = () => ({
  components: {
    ClickToEditableInput
  },
  data: function () {
    return {
      myValue: "",
    }
  },
  props: {
    role: {
      default: text("role", "text")
    },
  },
  template: `<ClickToEditableInput :role="role" v-model.lazy="myValue" />`
});