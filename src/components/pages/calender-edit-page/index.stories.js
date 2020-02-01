
import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/utils/story-export"
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
    components: { CalenderEditPage },
    template: `<CalenderEditPage />`
});