
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import ColorPalettePicker from "./index.vue";

export default {
    title:"molecules/ColorPalettePicker",
    component: {ColorPalettePicker}
};

export const Basic = () => ({
    components:{ColorPalettePicker},
    template: `<ColorPalettePicker />`
});