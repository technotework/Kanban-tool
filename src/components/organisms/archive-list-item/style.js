
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const ArchiveListItem = styled.div``;
    
    const ArchiveListItemComponent = Vue.component("archive-list-item-component",{
    components: {Theme, ArchiveListItem},
    template: `<Theme><ArchiveListItem><slot/></ArchiveListItem></Theme>`
    });

    export default ArchiveListItemComponent;