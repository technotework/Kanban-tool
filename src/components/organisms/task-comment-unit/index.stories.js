
import { storiesOf } from '@storybook/vue'
import TaskCommentUnit from './index.vue'

storiesOf('TaskCommentUnit', module)
    .add('default', () => ({
        components: { TaskCommentUnit },
        template: `<TaskCommentUnit  />`
    }));