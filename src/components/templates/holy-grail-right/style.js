
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const HolyGrailRight = styled.div``;
    
    const HolyGrailRightComponent = Vue.component("holy-grail-right-component",{
    components: {Theme, HolyGrailRight},
    template: `<Theme><HolyGrailRight><slot/></HolyGrailRight></Theme>`
    });

    export default HolyGrailRightComponent;