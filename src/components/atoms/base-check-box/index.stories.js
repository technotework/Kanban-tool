import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import BaseCheckBox from "./index.vue";

export default {
    title:"atoms/BaseCheckBox",
    component: {BaseCheckBox}
};

export const Basic = () => ({
    components:{BaseCheckBox,Theme},
    template: `
    <div>
        <Theme>
        <BaseCheckBox id="cat" name="animal" value="ねこ" @change="action">ねこ</BaseCheckBox>
        <BaseCheckBox id="dog" name="animal" value="いぬ" @change="action">いぬ</BaseCheckBox>
        </Theme>
    </div>
    `,
    methods: { action: action('change') }
});