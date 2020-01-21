
import BaseModelessContainer from "./index.vue";

export default {
    title:"atoms/BaseModelessContainer",
    component: {BaseModelessContainer}
};

export const Basic = () => ({
    components:{BaseModelessContainer},
    template: "<BaseModelessContainer />"
});