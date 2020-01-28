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
    template: `<Theme><BaseFormLabel for="cb"><BaseCheckBox id="cb" name="animal" value="cat"/>ねこ</BaseFormLabel></Theme>`
});
