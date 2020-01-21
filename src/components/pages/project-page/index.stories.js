
import { storiesOf } from '@storybook/vue'
import ProjectPage from './index.vue'

storiesOf('ProjectPage', module)
    .add('default', () => ({
        components: { ProjectPage },
        template: `<ProjectPage  />`
    }));