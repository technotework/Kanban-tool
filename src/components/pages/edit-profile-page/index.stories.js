
import { action, styled, withKnobs, text, color, number, withInfo } from "@/components/utils/story-export"
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
    components: { EditProfilePage },
    template: `<EditProfilePage />`
});