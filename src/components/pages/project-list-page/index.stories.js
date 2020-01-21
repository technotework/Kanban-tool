
import { storiesOf } from '@storybook/vue'
import ProjectListPage from './index.vue'

storiesOf('ProjectListPage', module)
    .add('default', () => ({
        components: { ProjectListPage },
        template: `<ProjectListPage  />`
    }))