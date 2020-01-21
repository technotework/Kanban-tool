
import BaseFileSelect from "./index.vue";

export default {
    title:"atoms/BaseFileSelect",
    component: {BaseFileSelect}
};

export const Basic = () => ({
    components:{BaseFileSelect},
    template: "<BaseFileSelect />"
});