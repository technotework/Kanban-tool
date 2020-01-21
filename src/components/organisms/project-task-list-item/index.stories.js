
import { storiesOf } from '@storybook/vue'
import ProjectTaskListItem from './index.vue'

storiesOf('ProjectTaskListItem', module)
    .add('default', () => ({
        components: { ProjectTaskListItem },
        template: `<ProjectTaskListItem  />`
    }));