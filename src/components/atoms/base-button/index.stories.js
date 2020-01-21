
import BaseButton from "./index.vue";

export default {
    title:"atoms/BaseButton",
    component: {BaseButton}
};

export const Basic = () => ({
    components:{BaseButton},
    template: "<BaseButton />"
});