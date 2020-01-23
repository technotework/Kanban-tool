
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const RegistForm = styled.div``;
    
    const RegistFormComponent = Vue.component("regist-form-component",{
    components: {Theme, RegistForm},
    template: `<Theme><RegistForm><slot/></RegistForm></Theme>`
    });

    export default RegistFormComponent;