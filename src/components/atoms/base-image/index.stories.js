
import BaseImage from "./index.vue";

export default {
    title:"atoms/BaseImage",
    component: {BaseImage}
};

export const Basic = () => ({
    components:{BaseImage},
    template: "<BaseImage />"
});