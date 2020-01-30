import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/themes/story-export"
import LayoutPositioner from "./index.vue"

export default {
    title: "templates/LayoutPositioner",
    component: { LayoutPositioner },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { LayoutPositioner, Theme },
    props: {
        top: { default: text("top", "auto") },
        left: { default: text("left", "auto") },
        right: { default: text("right", "0") },
        bottom: { default: text("bottom", "0") },
        width: { default: text("width", "auto") },
        position: { default: text("position", "absolute") }
    },
    template: `<Theme><LayoutPositioner 
    :width="width"
    :top="top"
    :left="left"
    :right="right"
    :bottom="bottom"
    :position="position">position</LayoutPositioner></Theme>`,
    parameters: {
        info: {},
    }
});

