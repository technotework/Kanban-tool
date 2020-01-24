
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import TaskPostForm from "./index.vue";

export default {
    title:"organisms/TaskPostForm",
    component: {TaskPostForm}
};

export const Basic = () => ({
    components:{TaskPostForm,Theme},
    template: `<Theme><TaskPostForm /></Theme>`
});