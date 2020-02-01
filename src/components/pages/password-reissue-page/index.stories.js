
import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
import PasswordReissuePage from "./index.vue";

export default {
    title: "pages/PasswordReissuePage",
    component: { PasswordReissuePage },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { PasswordReissuePage },
    template: `<PasswordReissuePage />`
});