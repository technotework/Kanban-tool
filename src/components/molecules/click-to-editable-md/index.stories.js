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
  PostedMD,
  SubmitMD
} from "./compose";

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
      myValue: "content",
    }
  },
  props: {
    isinitial: {
      default: boolean("isinitial", false)
    }
  },
  template: `<ClickToEditableMD v-bind={isedit,isinitial} v-model.lazy="myValue" />`
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

//---------------------
//Submit

export const Submit = () => ({
  components: {
    SubmitMD
  },
  data: function () {
    return {
      myValue: "",
    }
  },
  template: `<SubmitMD v-model.lazy="myValue" @cancel-submit-md="cancel" @submit-md="submit" />`,
  methods: {
    cancel: action('cancel-submit-md'),
    submit: action('submit-md')
  }
});