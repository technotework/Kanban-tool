
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const NotfoundPage = styled.div``;
    
    const NotfoundPageComponent = Vue.component("notfound-page-component",{
    components: {Theme, NotfoundPage},
    template: `<Theme><NotfoundPage><slot/></NotfoundPage></Theme>`
    });

    export default NotfoundPageComponent;