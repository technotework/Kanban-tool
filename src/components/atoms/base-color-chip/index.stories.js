import global from "@/components/themes/global-style"
import BaseColorChip from "./index.vue";

export default {
    title:"atoms/BaseColorChip",
    component: {BaseColorChip}
};

export const Basic = () => ({
    components:{BaseColorChip},
    template: `<BaseColorChip color="#ff0" />`
});