
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import EditProfilePage from "./index.vue";

export default {
    title:"pages/EditProfilePage",
    component: {EditProfilePage}
};

export const Basic = () => ({
    components:{EditProfilePage,Theme},
    template: `<Theme><EditProfilePage /></Theme>`
});