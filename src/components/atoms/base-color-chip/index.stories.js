import {
  createDefStory,
  createStory,
  tagTemp
} from "@/components/utils/story-creator";
import BaseColorChip from "./index.vue";

let description = 'import BaseColorChip from "@/components/atoms/base-color-chip/"';
export default createDefStory("atoms/BaseColorChip", BaseColorChip, description);


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

