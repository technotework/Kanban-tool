
import { storiesOf } from '@storybook/vue'
import TaskPostForm from './index.vue'

storiesOf('TaskPostForm', module)
    .add('default', () => ({
        components: { TaskPostForm },
        template: `<TaskPostForm  />`
    }));