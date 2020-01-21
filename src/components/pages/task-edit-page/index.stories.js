
import { storiesOf } from '@storybook/vue'
import TaskEditPage from './index.vue'

storiesOf('TaskEditPage', module)
    .add('default', () => ({
        components: { TaskEditPage },
        template: `<TaskEditPage  />`
    }));