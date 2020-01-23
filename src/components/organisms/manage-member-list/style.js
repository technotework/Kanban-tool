
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const ManageMemberList = styled.div``;
    
    const ManageMemberListComponent = Vue.component("manage-member-list-component",{
    components: {Theme, ManageMemberList},
    template: `<Theme><ManageMemberList><slot/></ManageMemberList></Theme>`
    });

    export default ManageMemberListComponent;