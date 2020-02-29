import {
  createDefStory,
  createStory,
  tagTemp
} from "@/components/utils/story-creator";
import BaseFileSelect from "./index.vue";

let description = 'import BaseFileSelect from "@/components/atoms/base-file-select/"';
export default createDefStory("atoms/BaseFileSelect", BaseFileSelect, description);


//---------------------
//Basic
let setting = {
  name: "BaseFileSelect",
  compos: {
    BaseFileSelect: BaseFileSelect
  },
  props: {
  },
  action: {},
  template: tagTemp`<BaseFileSelect ${'props'} ${'action'} />`
};

export const Basic = () => (createStory(setting));