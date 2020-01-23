
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const ColorLabel = styled.div``;
    
    const ColorLabelComponent = Vue.component("color-label-component",{
    components: {Theme, ColorLabel},
    template: `<Theme><ColorLabel><slot/></ColorLabel></Theme>`
    });

    export default ColorLabelComponent;