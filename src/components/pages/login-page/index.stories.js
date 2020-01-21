
import LoginPage from "./index.vue";

export default {
    title:"pages/LoginPage",
    component: {LoginPage}
};

export const Basic = () => ({
    components:{LoginPage},
    template: "<LoginPage />"
});