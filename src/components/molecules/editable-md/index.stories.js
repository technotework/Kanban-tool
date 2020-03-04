import {
  createDefStory,
  createStory,
  tagTemp
} from "@/components/utils/story-creator";
import {
  boolean,
} from "@/components/utils/story-export"
import EditableMD from "./index.vue";

let description = 'import EditableMD from "@/components/molecules/editable-md/"';
export default createDefStory("molecules/EditableMD", EditableMD, description);



//---------------------
//Basic

export const Basic = () => ({
  components: {
    EditableMD
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
  template: `<EditableMD v-bind={isedit} v-model.lazy="myValue" />`,
  methods: {}
});