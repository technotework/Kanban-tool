
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const ArchiveTaskListPage = styled.div``;
    
    const ArchiveTaskListPageComponent = Vue.component("archive-task-list-page-component",{
    components: {Theme, ArchiveTaskListPage},
    template: `<Theme><ArchiveTaskListPage><slot/></ArchiveTaskListPage></Theme>`
    });

    export default ArchiveTaskListPageComponent;