
import { storiesOf } from '@storybook/vue'
import ProjectTaskList from './index.vue'

storiesOf('ProjectTaskList', module)
    .add('default', () => ({
        components: { ProjectTaskList },
        template: `<ProjectTaskList  />`
    }));