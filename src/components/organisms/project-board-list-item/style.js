
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const ProjectBoardListItem = styled.div``;
    
    const ProjectBoardListItemComponent = Vue.component("project-board-list-item-component",{
    components: {Theme, ProjectBoardListItem},
    template: `<Theme><ProjectBoardListItem><slot/></ProjectBoardListItem></Theme>`
    });

    export default ProjectBoardListItemComponent;