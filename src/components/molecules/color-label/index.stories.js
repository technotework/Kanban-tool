
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import ColorLabel from "./index.vue";

export default {
    title:"molecules/ColorLabel",
    component: {ColorLabel}
};

export const Basic = () => ({
    components:{ColorLabel,Theme},
    template: `<Theme><ColorLabel /></Theme>`
});