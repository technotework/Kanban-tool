
import PasswordResetPage from "./index.vue";

export default {
    title:"pages/PasswordResetPage",
    component: {PasswordResetPage}
};

export const Basic = () => ({
    components:{PasswordResetPage},
    template: "<PasswordResetPage />"
});