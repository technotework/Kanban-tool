
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const LabelMasterPostForm = styled.div``;
    
    const LabelMasterPostFormComponent = Vue.component("label-master-post-form-component",{
    components: {Theme, LabelMasterPostForm},
    template: `<Theme><LabelMasterPostForm><slot/></LabelMasterPostForm></Theme>`
    });

    export default LabelMasterPostFormComponent;