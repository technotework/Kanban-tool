
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const LoginForm = styled.div``;
    
    const LoginFormComponent = Vue.component("login-form-component",{
    components: {Theme, LoginForm},
    template: `<Theme><LoginForm><slot/></LoginForm></Theme>`
    });

    export default LoginFormComponent;