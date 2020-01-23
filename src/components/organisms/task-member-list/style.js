
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const TaskMemberList = styled.div``;
    
    const TaskMemberListComponent = Vue.component("task-member-list-component",{
    components: {Theme, TaskMemberList},
    template: `<Theme><TaskMemberList><slot/></TaskMemberList></Theme>`
    });

    export default TaskMemberListComponent;