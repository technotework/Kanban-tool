
import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/themes/story-export"
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
    template: `<Theme><HolyGrailContainer width="100vw">content</HolyGrailContainer></Theme>`
});