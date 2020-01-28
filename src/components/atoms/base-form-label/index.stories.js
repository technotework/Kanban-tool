import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/themes/story-export"
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
    components: { BaseFormLabel, BaseCheckBox, Theme },
    props: {
        id: { default: text("id", "cat") }
    },
    template: `<Theme><BaseFormLabel :for="id"><BaseCheckBox :id="id" name="animal" value="cat"/>ねこ</BaseFormLabel></Theme>`
});
