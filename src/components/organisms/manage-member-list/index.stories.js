
import ManageMemberList from "./index.vue";

export default {
    title:"organisms/ManageMemberList",
    component: {ManageMemberList}
};

export const Basic = () => ({
    components:{ManageMemberList},
    template: "<ManageMemberList />"
});