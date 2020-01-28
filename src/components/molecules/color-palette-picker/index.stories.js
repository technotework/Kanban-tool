import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/themes/story-export"
import ColorPalettePicker from "./index.vue";

export default {
    title: "molecules/ColorPalettePicker",
    component: { ColorPalettePicker },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { ColorPalettePicker, Theme },
    template: `<Theme><ColorPalettePicker /></Theme>`
});