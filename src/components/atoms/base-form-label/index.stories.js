import {
  createDefStory,
  createStory,
  tagTemp
} from "@/components/utils/story-creator";
import BaseFormLabel from "./index.vue";
import BaseCheckBox from "@/components/atoms/base-check-box";

let description = 'import BaseFormLabel from "@/components/atoms/base-form-label/"';
export default createDefStory("atoms/BaseFormLabel", BaseFormLabel, description);


//---------------------
//Basic
let setting = {
  name: "BaseFormLabel",
  compos: {
    BaseFormLabel: BaseFormLabel,
    BaseCheckBox: BaseCheckBox
  },
  props: {},
  action: {},
  template: tagTemp`<BaseFormLabel for="id" ${"props"} ${"action"}><BaseCheckBox id="id" value="cat" name="cat" /> 猫 </BaseFormLabel>`
};

export const Basic = () => (createStory(setting));
