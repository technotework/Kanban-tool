
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const LabeledInput = styled.div``;
    
    const LabeledInputComponent = Vue.component("labeled-input-component",{
    components: {Theme, LabeledInput},
    template: `<Theme><LabeledInput><slot/></LabeledInput></Theme>`
    });

    export default LabeledInputComponent;