import {
  createDefStory,
  createStory,
  tagTemp
} from "@/components/utils/story-creator";

import {
  boolean,
  action
} from "@/components/utils/story-export"
import PostForm from "./index.vue";


let description = 'import PostForm from "@/components/molecules/post-form/"';
export default createDefStory("molecules/PostForm", PostForm, description);


//---------------------
//Basic

export const Basic = () => ({
  components: {
    PostForm
  },
  data: function () {
    return {
      myValue: "content",
    }
  },
  props: {},
  template: `<PostForm  v-model.lazy="myValue" />`
});