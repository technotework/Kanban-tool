
import LoginForm from "./index.vue";

export default {
    title:"organisms/LoginForm",
    component: {LoginForm}
};

export const Basic = () => ({
    components:{LoginForm},
    template: "<LoginForm />"
});