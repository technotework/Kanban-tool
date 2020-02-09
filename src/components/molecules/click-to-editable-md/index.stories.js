import {
  createDefStory,
  createStory,
  tagTemp
} from "@/components/utils/story-creator";

import {
  boolean,
  action
} from "@/components/utils/story-export"
import ClickToEditableMD from "./index.vue";
import {
  PostedMD
} from "./compose";

let description = 'import ClickToEditableMD from "@/components/molecules/click-to-editable-md/"<br>import {PostedMD, SubmitMD} from "@/components/molecules/click-to-editable-md/compose"';
export default createDefStory("molecules/ClickToEditableMD", ClickToEditableMD, description);


//---------------------
//Basic

export const Basic = () => ({
  components: {
    ClickToEditableMD
  },
  data: function () {
    return {
      myValue: "content",
    }
  },
  props: {
    isinitial: {
      default: boolean("isinitial", false)
    }
  },
  template: `<ClickToEditableMD v-bind={isinitial} v-model.lazy="myValue" />`
});


//---------------------
//Posted

export const Posted = () => ({
  components: {
    PostedMD
  },
  data: function () {
    return {
      myValue: "",
    }
  },
  template: `<PostedMD v-model.lazy="myValue" />`
});