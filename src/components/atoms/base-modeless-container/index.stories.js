
import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/utils/story-export"
import BaseModelessContainer from "./index.vue";

export default {
    title: "atoms/BaseModelessContainer",
    component: { BaseModelessContainer },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { BaseModelessContainer },
    props: {
        width: { default: text("width", "200px") },
        height: { default: text("height", "300px") },
        top: { default: text("top", "0") },
        left: { default: text("left", "0") },
        padding: { default: text("padding", "10px") },
        round: { default: text("round", "8px") },
        color: { default: color("color", "#ccc") },
    },
    template: `<BaseModelessContainer v-bind="{width,height,top,left,color,padding,round}">内容</BaseModelessContainer>`
});