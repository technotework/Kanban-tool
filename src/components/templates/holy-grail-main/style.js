
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const HolyGrailMain = styled.div``;
    
    const HolyGrailMainComponent = Vue.component("holy-grail-main-component",{
    components: {Theme, HolyGrailMain},
    template: `<Theme><HolyGrailMain><slot/></HolyGrailMain></Theme>`
    });

    export default HolyGrailMainComponent;