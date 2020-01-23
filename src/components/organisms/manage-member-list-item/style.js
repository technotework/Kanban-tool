
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const ManageMemberListItem = styled.div``;
    
    const ManageMemberListItemComponent = Vue.component("manage-member-list-item-component",{
    components: {Theme, ManageMemberListItem},
    template: `<Theme><ManageMemberListItem><slot/></ManageMemberListItem></Theme>`
    });

    export default ManageMemberListItemComponent;