import {
  createDefStory,
  createStory,
  tagTemp
} from "@/components/utils/story-creator";
import BaseModalContainer from "./index.vue";
import { Dialogue } from "./compose";

export default createDefStory("atoms/BaseModalContainer", BaseModalContainer);


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

