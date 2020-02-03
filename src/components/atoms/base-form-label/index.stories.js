import { action, withKnobs, text, color, number, array, object, boolean, withInfo } from "@/components/utils/story-export"
import BaseFormLabel from "./index.vue";
import BaseCheckBox from "@/components/atoms/base-check-box"

export default {
    title: "atoms/BaseFormLabel",
    component: { BaseFormLabel },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { BaseFormLabel, BaseCheckBox },
    props: {
        id: { default: text("id", "cat") }
    },
    template: `<BaseFormLabel :for="id"><BaseCheckBox :id="id" name="animal" value="cat"/>ねこ</BaseFormLabel>`
});
