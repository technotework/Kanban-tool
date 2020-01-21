
import { storiesOf } from '@storybook/vue'
import TaskLabelList from './index.vue'

storiesOf('TaskLabelList', module)
    .add('default', () => ({
        components: { TaskLabelList },
        template: `<TaskLabelList  />`
    }));