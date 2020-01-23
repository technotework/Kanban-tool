
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const BothSideLeft = styled.div``;
    
    const BothSideLeftComponent = Vue.component("both-side-left-component",{
    components: {Theme, BothSideLeft},
    template: `<Theme><BothSideLeft><slot/></BothSideLeft></Theme>`
    });

    export default BothSideLeftComponent;