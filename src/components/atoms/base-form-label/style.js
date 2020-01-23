
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const BaseFormLabel = styled.div``;
    
    const BaseFormLabelComponent = Vue.component("base-form-label-component",{
    components: {Theme, BaseFormLabel},
    template: `<Theme><BaseFormLabel><slot/></BaseFormLabel></Theme>`
    });

    export default BaseFormLabelComponent;