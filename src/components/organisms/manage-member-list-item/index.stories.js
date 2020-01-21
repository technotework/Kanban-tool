
import ManageMemberListItem from "./index.vue";

export default {
    title:"organisms/ManageMemberListItem",
    component: {ManageMemberListItem}
};

export const Basic = () => ({
    components:{ManageMemberListItem},
    template: "<ManageMemberListItem />"
});