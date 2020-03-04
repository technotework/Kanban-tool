import {
  createDefStory,
  createStory,
  tagTemp
} from "@/components/utils/story-creator";

import {
  boolean,
  action
} from "@/components/utils/story-export"
import ClickToEditableTextarea from "./index.vue";
import {
  PostedMD
} from "./compose";

let description = 'import ClickToEditableTextarea from "@/components/molecules/click-to-editable-textarea/"<br>import {PostedMD, SubmitMD} from "@/components/molecules/click-to-editable-textarea/compose"';
export default createDefStory("molecules/ClickToEditableTextarea", ClickToEditableTextarea, description);


//---------------------
//Basic

export const Basic = () => ({
  components: {
    ClickToEditableTextarea
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
  template: `<ClickToEditableTextarea v-bind={isinitial} v-model.lazy="myValue" />`
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