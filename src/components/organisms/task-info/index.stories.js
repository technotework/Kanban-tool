
import { storiesOf } from '@storybook/vue'
import TaskInfo from './index.vue'

storiesOf('TaskInfo', module)
    .add('default', () => ({
        components: { TaskInfo },
        template: `<TaskInfo  />`
    }))