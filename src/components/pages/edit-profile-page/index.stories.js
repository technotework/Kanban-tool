
import { global, action, Theme, styled, withKnobs, text, color, number, withInfo } from "@/components/themes/story-export"
import EditProfilePage from "./index.vue";

export default {
    title: "pages/EditProfilePage",
    component: { EditProfilePage },
    decorators: [withKnobs, withInfo],
    parameters: {
        info: {},
    }
};

export const Basic = () => ({
    components: { EditProfilePage, Theme },
    template: `<Theme><EditProfilePage /></Theme>`
});