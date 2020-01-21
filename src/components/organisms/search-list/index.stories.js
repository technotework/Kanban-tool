
import SearchList from "./index.vue";

export default {
    title:"organisms/SearchList",
    component: {SearchList}
};

export const Basic = () => ({
    components:{SearchList},
    template: "<SearchList />"
});