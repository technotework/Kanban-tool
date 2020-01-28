
import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/themes/story-export"
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
    components: { LoginForm, Theme },
    template: `<Theme><LoginForm /></Theme>`
});