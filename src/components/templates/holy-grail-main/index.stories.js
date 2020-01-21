
import HolyGrailMain from "./index.vue";

export default {
    title:"templates/HolyGrailMain",
    component: {HolyGrailMain}
};

export const Basic = () => ({
    components:{HolyGrailMain},
    template: "<HolyGrailMain />"
});