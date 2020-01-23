
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const BaseTimeText = styled.div``;
    
    const BaseTimeTextComponent = Vue.component("base-time-text-component",{
    components: {Theme, BaseTimeText},
    template: `<Theme><BaseTimeText><slot/></BaseTimeText></Theme>`
    });

    export default BaseTimeTextComponent;