
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const LabelMasterPage = styled.div``;
    
    const LabelMasterPageComponent = Vue.component("label-master-page-component",{
    components: {Theme, LabelMasterPage},
    template: `<Theme><LabelMasterPage><slot/></LabelMasterPage></Theme>`
    });

    export default LabelMasterPageComponent;