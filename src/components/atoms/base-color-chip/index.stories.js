import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/utils/story-export"
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
    components: { BaseColorChip },
    props: {
        color: { default: color("color", "#f00") },
        width: { default: text("width", "100px") },
        height: { default: text("height", "100px") },
    },
    template: `<BaseColorChip v-bind="{width,height,color}" />`
});