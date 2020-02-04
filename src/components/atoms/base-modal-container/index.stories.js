import {
  createDefStory,
  createStory,
  tagTemp
} from "@/components/utils/story-creator";
import BaseModalContainer from "./index.vue";
import { Dialogue } from "./compose";

let description = 'import BaseModalContainer from "@/components/atoms/base-modal-container/"';
export default createDefStory("atoms/BaseModalContainer", BaseModalContainer, description);


//---------------------
//Basic
let setting = {
  name: "BaseModalContainer",
  compos: { BaseModalContainer: BaseModalContainer },
  props: {
    compose: "none"
  },
  action: {},
  template: tagTemp`<BaseModalContainer ${'props'} ${'action'}>Contents</BaseModalContainer>`
};

export const Basic = () => (createStory(setting));

//---------------------
//Basic
let settingD = {
  name: "Dialogue",
  compos: { Dialogue: Dialogue },
  props: {},
  action: {},
  template: tagTemp`<Dialogue ${'props'} ${'action'}>Contents</Dialogue>`
};

export const ModalDialogue = () => (createStory(settingD));

