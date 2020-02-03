
import { action, withKnobs, text, color, number, array, object, boolean, withInfo } from "@/components/utils/story-export"
import LoginPage from "./index.vue";

export default {
    title: "pages/LoginPage",
    component: { LoginPage },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { LoginPage },
    template: `<LoginPage />`
});