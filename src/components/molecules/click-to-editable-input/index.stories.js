import {
  createDefStory,
  createStory,
  tagTemp
} from "@/components/utils/story-creator";
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
  props: {},
  template: `<ClickToEditableInput v-model.lazy="myValue" />`,
  methods: {}
});