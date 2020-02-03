import {
  createDefStory,
  createStory,
  tagTemp
} from "@/components/utils/story-creator";
import BaseColorChip from "./index.vue";

export default createDefStory("atoms/BaseColorChip", BaseColorChip);


//---------------------
//Basic
let setting = {
  name: "BaseColorChip",
  compos: { BaseColorChip: BaseColorChip },
  props: {
    color: "#ff0"
  },
  action: {},
  template: tagTemp`<BaseColorChip ${'props'} ${'action'} />`
};

export const Basic = () => (createStory(setting));

