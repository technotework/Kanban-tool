
import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
import CalenderEditPage from "./index.vue";

export default {
    title: "pages/CalenderEditPage",
    component: { CalenderEditPage },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { CalenderEditPage, Theme },
    template: `<Theme><CalenderEditPage /></Theme>`
});