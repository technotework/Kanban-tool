
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import ColorPalettePicker from "./index.vue";

export default {
    title:"molecules/ColorPalettePicker",
    component: {ColorPalettePicker}
};

export const Basic = () => ({
    components:{ColorPalettePicker,Theme},
    template: `<Theme><ColorPalettePicker /></Theme>`
});