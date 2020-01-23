
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import IconedText from "./index.vue";

export default {
    title:"molecules/IconedText",
    component: {IconedText}
};

export const Basic = () => ({
    components:{IconedText},
    template: `<IconedText />`
});