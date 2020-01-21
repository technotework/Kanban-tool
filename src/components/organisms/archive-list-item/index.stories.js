
import { storiesOf } from '@storybook/vue'
import ArchiveListItem from './index.vue'

storiesOf('ArchiveListItem', module)
    .add('default', () => ({
        components: { ArchiveListItem },
        template: `<ArchiveListItem  />`
    }));