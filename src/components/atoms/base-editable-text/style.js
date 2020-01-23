
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const BaseEditableText = styled.div``;
    
    const BaseEditableTextComponent = Vue.component("base-editable-text-component",{
    components: {Theme, BaseEditableText},
    template: `<Theme><BaseEditableText><slot/></BaseEditableText></Theme>`
    });

    export default BaseEditableTextComponent;