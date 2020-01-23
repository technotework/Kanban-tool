
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const ManagePlanPage = styled.div``;
    
    const ManagePlanPageComponent = Vue.component("manage-plan-page-component",{
    components: {Theme, ManagePlanPage},
    template: `<Theme><ManagePlanPage><slot/></ManagePlanPage></Theme>`
    });

    export default ManagePlanPageComponent;