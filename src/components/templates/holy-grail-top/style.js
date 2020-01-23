
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const HolyGrailTop = styled.div``;
    
    const HolyGrailTopComponent = Vue.component("holy-grail-top-component",{
    components: {Theme, HolyGrailTop},
    template: `<Theme><HolyGrailTop><slot/></HolyGrailTop></Theme>`
    });

    export default HolyGrailTopComponent;