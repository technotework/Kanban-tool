
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const RegistPage = styled.div``;
    
    const RegistPageComponent = Vue.component("regist-page-component",{
    components: {Theme, RegistPage},
    template: `<Theme><RegistPage><slot/></RegistPage></Theme>`
    });

    export default RegistPageComponent;