
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import BaseHeading from "./index.vue";

export default {
    title:"atoms/BaseHeading",
    component: {BaseHeading}
};

export const Basic = () => ({
    components:{BaseHeading,Theme},
    template: `
    <div>
    <Theme>
        <BaseHeading heading="lv1">h1</BaseHeading>
        <BaseHeading heading="lv2">h2</BaseHeading>
        <BaseHeading heading="lv3">h3</BaseHeading>
        <BaseHeading heading="lv4">h4</BaseHeading>
    </Theme>
    </div>`
});