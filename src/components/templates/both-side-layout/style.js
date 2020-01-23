
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const BothSideLayout = styled.div``;
    
    const BothSideLayoutComponent = Vue.component("both-side-layout-component",{
    components: {Theme, BothSideLayout},
    template: `<Theme><BothSideLayout><slot/></BothSideLayout></Theme>`
    });

    export default BothSideLayoutComponent;