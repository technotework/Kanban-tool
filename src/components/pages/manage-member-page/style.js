
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const ManageMemberPage = styled.div``;
    
    const ManageMemberPageComponent = Vue.component("manage-member-page-component",{
    components: {Theme, ManageMemberPage},
    template: `<Theme><ManageMemberPage><slot/></ManageMemberPage></Theme>`
    });

    export default ManageMemberPageComponent;