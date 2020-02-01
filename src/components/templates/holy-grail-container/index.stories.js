
import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
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
    components: { HolyGrailContainer, Theme },
    props: {
        width: { default: text("width", "100vw") },
        height: { default: text("height", "auto") },
    },
    template: `<Theme><HolyGrailContainer :width="width" :height="height">content</HolyGrailContainer></Theme>`
});