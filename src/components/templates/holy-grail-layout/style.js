
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const HolyGrailLayout = styled.div``;
    
    const HolyGrailLayoutComponent = Vue.component("holy-grail-layout-component",{
    components: {Theme, HolyGrailLayout},
    template: `<Theme><HolyGrailLayout><slot/></HolyGrailLayout></Theme>`
    });

    export default HolyGrailLayoutComponent;