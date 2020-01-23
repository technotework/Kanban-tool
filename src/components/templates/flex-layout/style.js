
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const FlexLayout = styled.div``;
    
    const FlexLayoutComponent = Vue.component("flex-layout-component",{
    components: {Theme, FlexLayout},
    template: `<Theme><FlexLayout><slot/></FlexLayout></Theme>`
    });

    export default FlexLayoutComponent;