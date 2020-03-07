import { createDefStory, createStory, tagTemp } from "@/components/utils/story-creator";
import LabeledCheckbox from "@/components/molecules/labeled-check-box/base"


let description = 'import LabeledCheckbox from "@/components/molecules/labeled-check-box/base"';
export default createDefStory("molecules/LabeledCheckbox", LabeledCheckbox, description);

let setting = {
  name: "LabeledCheckbox",
  compos: { LabeledCheckbox: LabeledCheckbox },
  props: {
    id: "id",
    value: "ねこ",
    name: "cat"
  },
  action: { event: "change" },
  template: tagTemp`<LabeledCheckbox ${"props"} ${"action"}> cat </LabeledCheckbox>`
};

export const Basic = () => createStory(setting);
