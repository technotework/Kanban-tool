
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const LabelMasterList = styled.div``;
    
    const LabelMasterListComponent = Vue.component("label-master-list-component",{
    components: {Theme, LabelMasterList},
    template: `<Theme><LabelMasterList><slot/></LabelMasterList></Theme>`
    });

    export default LabelMasterListComponent;