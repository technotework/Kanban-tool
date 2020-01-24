
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import CommentForm from "./index.vue";

export default {
    title:"molecules/CommentForm",
    component: {CommentForm}
};

export const Basic = () => ({
    components:{CommentForm,Theme},
    template: `<Theme><CommentForm /></Theme>`
});