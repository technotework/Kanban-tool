
import { storiesOf } from '@storybook/vue'
import ArchiveList from './index.vue'

storiesOf('ArchiveList', module)
    .add('default', () => ({
        components: { ArchiveList },
        template: `<ArchiveList  />`
    }))