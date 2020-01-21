
import { storiesOf } from '@storybook/vue'
import TaskLabelListItem from './index.vue'

storiesOf('TaskLabelListItem', module)
    .add('default', () => ({
        components: { TaskLabelListItem },
        template: `<TaskLabelListItem  />`
    }))