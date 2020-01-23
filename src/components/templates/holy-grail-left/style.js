
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const HolyGrailLeft = styled.div``;
    
    const HolyGrailLeftComponent = Vue.component("holy-grail-left-component",{
    components: {Theme, HolyGrailLeft},
    template: `<Theme><HolyGrailLeft><slot/></HolyGrailLeft></Theme>`
    });

    export default HolyGrailLeftComponent;