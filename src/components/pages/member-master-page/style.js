
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const MemberMasterPage = styled.div``;
    
    const MemberMasterPageComponent = Vue.component("member-master-page-component",{
    components: {Theme, MemberMasterPage},
    template: `<Theme><MemberMasterPage><slot/></MemberMasterPage></Theme>`
    });

    export default MemberMasterPageComponent;