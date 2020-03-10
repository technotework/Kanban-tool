import {
  createDefStory,
  createStory,
  tagTemp
} from "@/components/utils/story-creator";
import BaseSubmitButton from "./index.vue";

let description = 'import BaseSubmitButton from "@/components/atoms/base-submit-button/"';
export default createDefStory("atoms/BaseSubmitButton", BaseSubmitButton, description);


//---------------------
//Basic
let setting = {
  name: "BaseSubmitButton",
  compos: {
    BaseSubmitButton: BaseSubmitButton
  },
  props: {
    value: "Button"
  },
  action: {
    event: "click"
  },
  template: tagTemp`<BaseSubmitButton ${'props'} ${'action'} />`
};

export const Basic = () => (createStory(setting));