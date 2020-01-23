
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const BothSideRight = styled.div``;
    
    const BothSideRightComponent = Vue.component("both-side-right-component",{
    components: {Theme, BothSideRight},
    template: `<Theme><BothSideRight><slot/></BothSideRight></Theme>`
    });

    export default BothSideRightComponent;