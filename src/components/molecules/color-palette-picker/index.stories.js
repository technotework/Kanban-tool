
import ColorPalettePicker from "./index.vue";

export default {
    title:"molecules/ColorPalettePicker",
    component: {ColorPalettePicker}
};

export const Basic = () => ({
    components:{ColorPalettePicker},
    template: "<ColorPalettePicker />"
});