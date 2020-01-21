
import SearchListItem from "./index.vue";

export default {
    title:"organisms/SearchListItem",
    component: {SearchListItem}
};

export const Basic = () => ({
    components:{SearchListItem},
    template: "<SearchListItem />"
});