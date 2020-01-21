
import { storiesOf } from '@storybook/vue'
import TaskCommentListItem from './index.vue'

storiesOf('TaskCommentListItem', module)
    .add('default', () => ({
        components: { TaskCommentListItem },
        template: `<TaskCommentListItem  />`
    }))