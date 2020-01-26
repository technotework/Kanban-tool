
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import BaseFormLabel from "./index.vue";
import BaseCheckBox from "@/components/atoms/base-check-box"

export default {
    title: "atoms/BaseFormLabel",
    component: { BaseFormLabel }
};

export const Basic = () => ({
    components: { BaseFormLabel, BaseCheckBox, Theme },
    template: `<Theme><BaseFormLabel for="cb"><BaseCheckBox id="cb" name="animal" value="cat"/>ねこ</BaseFormLabel></Theme>`
});
