
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const ArchiveList = styled.div``;
    
    const ArchiveListComponent = Vue.component("archive-list-component",{
    components: {Theme, ArchiveList},
    template: `<Theme><ArchiveList><slot/></ArchiveList></Theme>`
    });

    export default ArchiveListComponent;