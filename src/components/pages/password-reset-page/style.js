
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const PasswordResetPage = styled.div``;
    
    const PasswordResetPageComponent = Vue.component("password-reset-page-component",{
    components: {Theme, PasswordResetPage},
    template: `<Theme><PasswordResetPage><slot/></PasswordResetPage></Theme>`
    });

    export default PasswordResetPageComponent;