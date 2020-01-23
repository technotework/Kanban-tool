
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const InlineMessage = styled.div``;
    
    const InlineMessageComponent = Vue.component("inline-message-component",{
    components: {Theme, InlineMessage},
    template: `<Theme><InlineMessage><slot/></InlineMessage></Theme>`
    });

    export default InlineMessageComponent;