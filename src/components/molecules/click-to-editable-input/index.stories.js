import {
  createDefStory,
  createStory,
  tagTemp
} from "@/components/utils/story-creator";
import ClickToEditableInput from "./index.vue";

let description = 'import ClickToEditableInput from "@/components/molecules/click-to-editable-input/"';
export default createDefStory("molecules/ClickToEditableInput", ClickToEditableInput, description);


//---------------------
//Basic
let setting = {
  name: "ClickToEditableInput",
  compos: {
    ClickToEditableInput: ClickToEditableInput
  },
  props: {
    content:"BoardName"
  },
  action: {
    event: "click"
  },
  template: tagTemp `<ClickToEditableInput ${'props'} ${'action'} />`
};

export const Basic = () => (createStory(setting));