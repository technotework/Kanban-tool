import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
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
    components: { BothSideLeft },
    props: {
        left: { default: text("left", "0") },
        width: { default: text("width", "auto") }
    },
    template: `<BothSideLeft :left="left" :width="width">left</BothSideLeft>`,
    parameters: {
        info: {},
    }
});

