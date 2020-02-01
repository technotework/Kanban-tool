
import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
import NotfoundPage from "./index.vue";

export default {
    title: "pages/NotfoundPage",
    component: { NotfoundPage },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { NotfoundPage, Theme },
    template: `<Theme><NotfoundPage /></Theme>`
});