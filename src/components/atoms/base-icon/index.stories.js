
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import BaseIcon from "./index.vue";

export default {
    title:"atoms/BaseIcon",
    component: {BaseIcon}
};

export const Basic = () => ({
    components:{BaseIcon},
    template: `<BaseIcon width="200px" height="200px" round="100px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Doll_face_silver_Persian_2.jpg/1024px-Doll_face_silver_Persian_2.jpg" />`
});