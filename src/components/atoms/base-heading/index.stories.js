
import BaseHeading from "./index.vue";

export default {
    title:"atoms/BaseHeading",
    component: {BaseHeading}
};

export const Basic = () => ({
    components:{BaseHeading},
    template: "<BaseHeading />"
});