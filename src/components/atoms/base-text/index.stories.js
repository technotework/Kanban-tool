
import BaseText from "./index.vue";

export default {
    title:"atoms/BaseText",
    component: {BaseText}
};

export const Basic = () => ({
    components:{BaseText},
    template: "<BaseText />"
});