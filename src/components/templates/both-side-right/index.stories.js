import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export";
import BothSideRight from "./index.vue";

export default {
    title: "templates/BothSideRight",
    component: { BothSideRight },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { BothSideRight },
    props: {
        right: { default: text("right", "0") },
        width: { default: text("width", "auto") }
    },
    template: `
    
    <BothSideRight :right="right" :width="width">right</BothSideRight>
    `
});