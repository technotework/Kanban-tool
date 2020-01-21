
import { storiesOf } from '@storybook/vue'
import ArchiveTaskListPage from './index.vue'

storiesOf('ArchiveTaskListPage', module)
    .add('default', () => ({
        components: { ArchiveTaskListPage },
        template: `<ArchiveTaskListPage  />`
    }));