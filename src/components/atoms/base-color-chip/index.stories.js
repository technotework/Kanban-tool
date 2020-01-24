import global from "@/components/themes/global-style"
import Theme from "@/components/themes/theme"
import BaseColorChip from "./index.vue";

export default {
    title:"atoms/BaseColorChip",
    component: {BaseColorChip}
};

export const Basic = () => ({
    components:{BaseColorChip,Theme},
    template: `<Theme><BaseColorChip color="#ff0" /></Theme>`
});