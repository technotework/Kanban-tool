
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import InlineMessage from "./index.vue";

export default {
    title:"molecules/InlineMessage",
    component: {InlineMessage}
};

export const Basic = () => ({
    components:{InlineMessage},
    template: `<InlineMessage />`
});