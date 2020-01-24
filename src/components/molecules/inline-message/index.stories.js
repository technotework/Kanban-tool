
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import InlineMessage from "./index.vue";

export default {
    title:"molecules/InlineMessage",
    component: {InlineMessage}
};

export const Basic = () => ({
    components:{InlineMessage,Theme},
    template: `<Theme><InlineMessage /></Theme>`
});