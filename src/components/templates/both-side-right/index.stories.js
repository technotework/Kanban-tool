import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/themes/story-export";
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
    components: { BothSideRight, Theme },
    props: {
        right: { default: text("right", "0") },
        width: { default: text("width", "auto") }
    },
    template: `
    <Theme>
    <BothSideRight :right="right" :width="width">right</BothSideRight>
    </Theme>`
});