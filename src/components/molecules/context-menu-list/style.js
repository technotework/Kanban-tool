
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const ContextMenuList = styled.div``;
    
    const ContextMenuListComponent = Vue.component("context-menu-list-component",{
    components: {Theme, ContextMenuList},
    template: `<Theme><ContextMenuList><slot/></ContextMenuList></Theme>`
    });

    export default ContextMenuListComponent;