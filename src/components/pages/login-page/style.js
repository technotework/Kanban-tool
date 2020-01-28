
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"

//コンポーネントスタイル

const LoginPage = styled.div``;

const LoginPageComponent = Vue.component("login-page-component", {
    components: { Theme, LoginPage },
    template: `<Theme><LoginPage><slot/></LoginPage></Theme>`
});

export default LoginPageComponent;