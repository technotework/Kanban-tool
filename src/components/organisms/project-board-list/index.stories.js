
import { storiesOf } from '@storybook/vue'
import ProjectBoardList from './index.vue'

storiesOf('ProjectBoardList', module)
    .add('default', () => ({
        components: { ProjectBoardList },
        template: `<ProjectBoardList  />`
    }));