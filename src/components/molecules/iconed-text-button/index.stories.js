
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import IconedTextButton from "./index.vue";

export default {
    title:"molecules/IconedTextButton",
    component: {IconedTextButton}
};

export const Basic = () => ({
    components:{IconedTextButton},
    template: `<IconedTextButton />`
});