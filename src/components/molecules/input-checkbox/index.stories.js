
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import InputCheckbox from "./index.vue";

export default {
    title:"molecules/InputCheckbox",
    component: {InputCheckbox}
};

export const Basic = () => ({
    components:{InputCheckbox,Theme},
    template: `<Theme><InputCheckbox /></Theme>`
});