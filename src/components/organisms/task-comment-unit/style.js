
import Vue from "vue"
import styled from "vue-styled-components";
import Theme from "@/components/themes/theme"
    
    //コンポーネントスタイル

    const TaskCommentUnit = styled.div``;
    
    const TaskCommentUnitComponent = Vue.component("task-comment-unit-component",{
    components: {Theme, TaskCommentUnit},
    template: `<Theme><TaskCommentUnit><slot/></TaskCommentUnit></Theme>`
    });

    export default TaskCommentUnitComponent;