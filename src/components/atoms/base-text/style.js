
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const BaseText = styled.div``;
    
    const BaseTextComponent = Vue.component("base-text-component",{
    components: {Theme, BaseText},
    template: `<Theme><BaseText><slot/></BaseText></Theme>`
    });

    export default BaseTextComponent;