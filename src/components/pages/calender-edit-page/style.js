
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const CalenderEditPage = styled.div``;
    
    const CalenderEditPageComponent = Vue.component("calender-edit-page-component",{
    components: {Theme, CalenderEditPage},
    template: `<Theme><CalenderEditPage><slot/></CalenderEditPage></Theme>`
    });

    export default CalenderEditPageComponent;