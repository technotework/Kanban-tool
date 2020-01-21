
import { storiesOf } from '@storybook/vue'
import TaskSchedule from './index.vue'

storiesOf('TaskSchedule', module)
    .add('default', () => ({
        components: { TaskSchedule },
        template: `<TaskSchedule  />`
    }))