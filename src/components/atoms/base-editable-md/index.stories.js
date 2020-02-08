import {
  createDefStory,
  createStory,
  tagTemp
} from "@/components/utils/story-creator";
import {
  boolean,
} from "@/components/utils/story-export"
import BaseEditableMD from "./index.vue";

let description = 'import BaseEditableMD from "@/components/atoms/base-editable-md/"';
export default createDefStory("atoms/BaseEditableMD", BaseEditableMD, description);



//---------------------
//Basic

export const Basic = () => ({
  components: {
    BaseEditableMD
  },
  data: function () {
    return {
      myValue: "",
    }
  },
  props: {
    isedit: {
      default: boolean("isedit", false)
    }
  },
  template: `<BaseEditableMD v-bind={isedit} v-model.lazy="myValue" />`,
  methods: {}
});