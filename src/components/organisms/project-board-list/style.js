
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const ProjectBoardList = styled.div``;
    
    const ProjectBoardListComponent = Vue.component("project-board-list-component",{
    components: {Theme, ProjectBoardList},
    template: `<Theme><ProjectBoardList><slot/></ProjectBoardList></Theme>`
    });

    export default ProjectBoardListComponent;