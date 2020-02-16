import { createDefStory, createStory, tagTemp } from "@/components/utils/story-creator";
import BaseCheckBox from "./index.vue";
import BaseFormLabel from "@/components/atoms/base-form-label";

let description = 'import BaseCheckBox from "@/components/atoms/base-check-box/"';
export default createDefStory("atoms/BaseCheckBox", BaseCheckBox, description);

let setting = {
  name: "BaseCheckBox",
  compos: { BaseLabel: BaseFormLabel, BaseCheckBox: BaseCheckBox },
  props: {
    id: "id",
    value: "ねこ",
    name: "cat"
  },
  action: { event: "change" },
  template: tagTemp`<BaseLabel :for="id"><BaseCheckBox ${"props"} ${"action"} /> Label </BaseLabel>`
};

export const Basic = () => createStory(setting);
