import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/themes/story-export"
import BaseColorChip from "./index.vue";

export default {
    title: "atoms/BaseColorChip",
    component: { BaseColorChip },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { BaseColorChip, Theme },
    template: `<Theme><BaseColorChip color="#ff0" /></Theme>`
});