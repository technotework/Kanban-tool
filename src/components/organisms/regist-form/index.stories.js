
import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/tool/story-export"
import RegistForm from "./index.vue";

export default {
    title: "organisms/RegistForm",
    component: { RegistForm },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { RegistForm, Theme },
    template: `<Theme><RegistForm /></Theme>`
});