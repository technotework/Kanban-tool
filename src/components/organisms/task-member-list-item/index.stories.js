
import { storiesOf } from '@storybook/vue'
import TaskMemberListItem from './index.vue'

storiesOf('TaskMemberListItem', module)
    .add('default', () => ({
        components: { TaskMemberListItem },
        template: `<TaskMemberListItem  />`
    }));