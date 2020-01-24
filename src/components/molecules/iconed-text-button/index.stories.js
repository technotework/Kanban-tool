
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import IconedTextButton from "./index.vue";

export default {
    title:"molecules/IconedTextButton",
    component: {IconedTextButton}
};

export const Basic = () => ({
    components:{IconedTextButton,Theme},
    template: `<Theme><IconedTextButton /></Theme>`
});