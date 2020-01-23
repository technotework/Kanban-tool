
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const LayoutSpacer = styled.div``;
    
    const LayoutSpacerComponent = Vue.component("layout-spacer-component",{
    components: {Theme, LayoutSpacer},
    template: `<Theme><LayoutSpacer><slot/></LayoutSpacer></Theme>`
    });

    export default LayoutSpacerComponent;