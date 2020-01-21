
import { storiesOf } from '@storybook/vue'
import TaskCommentList from './index.vue'

storiesOf('TaskCommentList', module)
    .add('default', () => ({
        components: { TaskCommentList },
        template: `<TaskCommentList  />`
    }))