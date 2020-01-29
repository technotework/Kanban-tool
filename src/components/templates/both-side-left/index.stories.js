import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/themes/story-export"
import BothSideLeft from "./index.vue"

export default {
    title: "templates/BothSideLeft",
    component: { BothSideLeft },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { BothSideLeft, Theme },
    props: {
        left: { default: text("left", "0") },
        width: { default: text("width", "auto") }
    },
    template: `<Theme><BothSideLeft :left="left" :width="width">left</BothSideLeft></Theme>`,
    parameters: {
        info: {},
    }
});

