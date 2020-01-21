
import { storiesOf } from '@storybook/vue'
import ProjectBoardListItem from './index.vue'

storiesOf('ProjectBoardListItem', module)
    .add('default', () => ({
        components: { ProjectBoardListItem },
        template: `<ProjectBoardListItem  />`
    }))