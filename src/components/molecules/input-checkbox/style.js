
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const InputCheckbox = styled.div``;
    
    const InputCheckboxComponent = Vue.component("input-checkbox-component",{
    components: {Theme, InputCheckbox},
    template: `<Theme><InputCheckbox><slot/></InputCheckbox></Theme>`
    });

    export default InputCheckboxComponent;