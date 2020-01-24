
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import BaseImage from "./index.vue";

export default {
    title:"atoms/BaseImage",
    component: {BaseImage}
};

export const Basic = () => ({
    components:{BaseImage},
    template: `<BaseImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Doll_face_silver_Persian_2.jpg/1024px-Doll_face_silver_Persian_2.jpg" width="200px" alt="cat" />`
});