import {
    createDefStory,
    createStory,
    tagTemp
  } from "@/components/utils/story-creator";
import ProjectBoardListItem from "./index.vue";

  let description = 'import ProjectBoardListItem from "@/components/organisms/project-board-list-item/"';
  export default createDefStory("organisms/ProjectBoardListItem", ProjectBoardListItem, description);
  

//---------------------
//Basic
let setting = {
    name: "ProjectBoardListItem",
    compos: {
      ProjectBoardListItem: ProjectBoardListItem
    },
    props: {
      content:"Title"
    },
    action: {
    },
    template: tagTemp `<ProjectBoardListItem ${'props'} ${'action'} />`
  };
  
  export const Basic = () => (createStory(setting));


