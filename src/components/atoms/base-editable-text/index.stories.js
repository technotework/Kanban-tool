import {
  createDefStory,
  createStory,
  tagTemp
} from "@/components/utils/story-creator";
import BaseEditableText from "./index.vue";

export default createDefStory("atoms/BaseEditableText", BaseEditableText);


//---------------------
//Basic
let setting = {
  name: "BaseEditableText",
  compos: { BaseEditableText: BaseEditableText },
  props: {},
  action: {},
  template: tagTemp`<BaseEditableText ${'props'} ${'action'} />`
};

export const Basic = () => (createStory(setting));

