
import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
import LoginForm from "./index.vue";

export default {
    title: "organisms/LoginForm",
    component: { LoginForm },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { LoginForm },
    template: `<LoginForm />`
});