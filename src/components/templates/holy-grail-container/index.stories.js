
import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/utils/story-export"
import HolyGrailContainer from "./index.vue";

export default {
    title: "templates/HolyGrailContainer",
    component: { HolyGrailContainer },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { HolyGrailContainer },
    props: {
        width: { default: text("width", "100vw") },
        height: { default: text("height", "auto") },
    },
    template: `<HolyGrailContainer :width="width" :height="height">content</HolyGrailContainer>`
});