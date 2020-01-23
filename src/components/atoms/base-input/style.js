
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const BaseInput = styled.div``;
    
    const BaseInputComponent = Vue.component("base-input-component",{
    components: {Theme, BaseInput},
    template: `<Theme><BaseInput><slot/></BaseInput></Theme>`
    });

    export default BaseInputComponent;