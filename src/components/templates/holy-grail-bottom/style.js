
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const HolyGrailBottom = styled.div``;
    
    const HolyGrailBottomComponent = Vue.component("holy-grail-bottom-component",{
    components: {Theme, HolyGrailBottom},
    template: `<Theme><HolyGrailBottom><slot/></HolyGrailBottom></Theme>`
    });

    export default HolyGrailBottomComponent;