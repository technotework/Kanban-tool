
import global from "@/components/themes/global-style"
import { action } from '@storybook/addon-actions';
import Theme from "@/components/themes/theme"
import BaseInput from "./index.vue";

export default {
    title:"atoms/BaseInput",
    component: {BaseInput}
};

export const Basic = () => ({
    components:{BaseInput,Theme},
    template: `<Theme><BaseInput width="200px" padding="5px" placeholder="please input" @input="action" required /></Theme>`,
    methods: { action: action('input') }
});