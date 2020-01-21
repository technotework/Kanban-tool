
import { storiesOf } from '@storybook/vue'
import ProjectListItem from './index.vue'

storiesOf('ProjectListItem', module)
    .add('default', () => ({
        components: { ProjectListItem },
        template: `<ProjectListItem  />`
    }))