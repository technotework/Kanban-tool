
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const LabelMasterListItem = styled.div``;
    
    const LabelMasterListItemComponent = Vue.component("label-master-list-item-component",{
    components: {Theme, LabelMasterListItem},
    template: `<Theme><LabelMasterListItem><slot/></LabelMasterListItem></Theme>`
    });

    export default LabelMasterListItemComponent;