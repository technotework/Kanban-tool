
import CommentForm from "./index.vue";

export default {
    title:"molecules/CommentForm",
    component: {CommentForm}
};

export const Basic = () => ({
    components:{CommentForm},
    template: "<CommentForm />"
});