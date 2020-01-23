
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const BaseHeading = styled.div``;
    
    const BaseHeadingComponent = Vue.component("base-heading-component",{
    components: {Theme, BaseHeading},
    template: `<Theme><BaseHeading><slot/></BaseHeading></Theme>`
    });

    export default BaseHeadingComponent;