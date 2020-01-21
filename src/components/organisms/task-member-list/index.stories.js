
import { storiesOf } from '@storybook/vue'
import TaskMemberList from './index.vue'

storiesOf('TaskMemberList', module)
    .add('default', () => ({
        components: { TaskMemberList },
        template: `<TaskMemberList  />`
    }));