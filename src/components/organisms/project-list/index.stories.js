
import { storiesOf } from '@storybook/vue'
import ProjectList from './index.vue'

storiesOf('ProjectList', module)
    .add('default', () => ({
        components: { ProjectList },
        template: `<ProjectList  />`
    }));