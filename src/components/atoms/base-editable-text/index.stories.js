import {
  createDefStory,
  createStory,
  tagTemp
} from "@/components/utils/story-creator";
import BaseEditableText from "./index.vue";

let description = 'import BaseEditableText from "@/components/atoms/base-editable-text/"';
export default createDefStory("atoms/BaseEditableText", BaseEditableText, description);


//---------------------
//Basic
let setting = {
  name: "BaseEditableText",
  compos: {
    BaseEditableText: BaseEditableText
  },
  props: {
    contenteditable: true
  },
  action: {},
  template: tagTemp `<BaseEditableText ${'props'} ${'action'} />`
};

export const Basic = () => (createStory(setting));