import {
  createDefStory,
  createStory,
  tagTemp
} from "@/components/utils/story-creator";
import ClickToEditableText from "./index.vue";

let description = 'import ClickToEditableText from "@/components/molecules/click-to-editable-text/"';
export default createDefStory("molecules/ClickToEditableText", ClickToEditableText, description);


//---------------------
//Basic
let setting = {
  name: "ClickToEditableText",
  compos: {
    ClickToEditableText: ClickToEditableText
  },
  props: {},
  action: {
    event: "click"
  },
  template: tagTemp `<ClickToEditableText ${'props'} ${'action'}><slot /></ClickToEditableText>`
};

export const Basic = () => (createStory(setting));