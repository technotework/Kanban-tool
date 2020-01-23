
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const TaskMemberListItem = styled.div``;
    
    const TaskMemberListItemComponent = Vue.component("task-member-list-item-component",{
    components: {Theme, TaskMemberListItem},
    template: `<Theme><TaskMemberListItem><slot/></TaskMemberListItem></Theme>`
    });

    export default TaskMemberListItemComponent;