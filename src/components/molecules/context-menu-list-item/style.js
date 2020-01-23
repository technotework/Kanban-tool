
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const ContextMenuListItem = styled.div``;
    
    const ContextMenuListItemComponent = Vue.component("context-menu-list-item-component",{
    components: {Theme, ContextMenuListItem},
    template: `<Theme><ContextMenuListItem><slot/></ContextMenuListItem></Theme>`
    });

    export default ContextMenuListItemComponent;