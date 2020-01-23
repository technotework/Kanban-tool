
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const FloatMessage = styled.div``;
    
    const FloatMessageComponent = Vue.component("float-message-component",{
    components: {Theme, FloatMessage},
    template: `<Theme><FloatMessage><slot/></FloatMessage></Theme>`
    });

    export default FloatMessageComponent;