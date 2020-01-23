
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const MemberMasterList = styled.div``;
    
    const MemberMasterListComponent = Vue.component("member-master-list-component",{
    components: {Theme, MemberMasterList},
    template: `<Theme><MemberMasterList><slot/></MemberMasterList></Theme>`
    });

    export default MemberMasterListComponent;