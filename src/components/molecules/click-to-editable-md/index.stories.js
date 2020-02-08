import {
  createDefStory,
  createStory,
  tagTemp
} from "@/components/utils/story-creator";

import ClickToEditableMD from "./index.vue";

let description = 'import ClickToEditableMD from "@/components/molecules/click-to-editable-md/"';
export default createDefStory("molecules/ClickToEditableMD", ClickToEditableMD, description);


//---------------------
//Basic

export const Basic = () => ({
  components: {
    ClickToEditableMD
  },
  data: function () {
    return {
      myValue: "",
    }
  },
  props: {},
  template: `<ClickToEditableMD v-model.lazy="myValue" />`
});