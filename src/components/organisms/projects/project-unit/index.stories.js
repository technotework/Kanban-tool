import { action, object, text } from "@/components/utils/story-export";
import { createDefStory } from "@/components/utils/story-creator";

import ProjectUnit from "./index.vue";

const description =
    'import ProjectUnit from "@/components/organisms/projects/project-unit/"';
export default createDefStory(
    "organisms/projects/ProjectUnit",
    ProjectUnit,
    description
);

//---------------------
//Basic
export const Basic = () => ({
    components: {
        ProjectUnit
    },
    data: () => {
        return {
            projectItems: [
                {
                    project: {
                        id: "p1",
                        label: "MyProject1",
                        update_date: "1560000000"
                    }
                },
                {
                    project: {
                        id: "p2",
                        label: "MyProject2",
                        update_date: "1560000000"
                    }
                }
            ]
        };
    },
    props: {
        teamName: { default: text("teamName", "MyTeam") },
        userData: {
            default: object("userData", {
                username: "John Smith",
                img:
                    "https://upload.wikimedia.org/wikipedia/commons/3/31/Doll_face_silver_Persian_2.jpg"
            })
        }
    },
    template: `<ProjectUnit
    v-model="projectItems"
    :title.sync="teamName"
    :user-data="userData"
    @add-event="onClick"
    @context-menu-click="onMenuClick"
    @edited-project-name="onInput"
    @drag-sort-list="onDragSortList"
    @nav-event="onLogout"
    @update:title="onUpdateTeamName"
  />`,
    methods: {
        onClick: action("add-event"),
        onMenuClick: action("context-menu-click"),
        onInput: action("edited-project-name"),
        onDragSortList: action("drag-sort-list"),
        onLogout: action("nav-event"),
        onUpdateTeamName: action("update:title")
    }
});
