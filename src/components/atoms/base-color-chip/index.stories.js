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
    props: {
        color: { default: color("color", "#ff0") },
        width: { default: text("width", "100px") },
        height: { default: text("height", "100px") },
    },
    template: `<Theme><BaseColorChip :width="width" :height="height" :color="color" /></Theme>`
});