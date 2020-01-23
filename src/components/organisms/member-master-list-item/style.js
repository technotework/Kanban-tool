
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const MemberMasterListItem = styled.div``;
    
    const MemberMasterListItemComponent = Vue.component("member-master-list-item-component",{
    components: {Theme, MemberMasterListItem},
    template: `<Theme><MemberMasterListItem><slot/></MemberMasterListItem></Theme>`
    });

    export default MemberMasterListItemComponent;