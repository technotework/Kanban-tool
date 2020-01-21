
import { storiesOf } from '@storybook/vue'
import ProjectBoardQuickEditor from './index.vue'

storiesOf('ProjectBoardQuickEditor', module)
    .add('default', () => ({
        components: { ProjectBoardQuickEditor },
        template: `<ProjectBoardQuickEditor  />`
    }));