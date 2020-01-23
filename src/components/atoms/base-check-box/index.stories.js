import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import BaseCheckBox from "./index.vue";

export default {
    title:"atoms/BaseCheckBox",
    component: {BaseCheckBox}
};

export const Basic = () => ({
    components:{BaseCheckBox},
    template: `
    <div>
        <BaseCheckBox id="cat" name="animal" value="ねこ" @change="action">ねこ</BaseCheckBox>
        <BaseCheckBox id="dog" name="animal" value="いぬ" @change="action">いぬ</BaseCheckBox>
    </div>
    `,
    methods: { action: action('change') }
});