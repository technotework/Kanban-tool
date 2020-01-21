
import EditProfilePage from "./index.vue";

export default {
    title:"pages/EditProfilePage",
    component: {EditProfilePage}
};

export const Basic = () => ({
    components:{EditProfilePage},
    template: "<EditProfilePage />"
});