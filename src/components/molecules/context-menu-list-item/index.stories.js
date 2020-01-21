
import { storiesOf } from '@storybook/vue'
import ContextMenuListItem from './index.vue'

storiesOf('ContextMenuListItem', module)
    .add('default', () => ({
        components: { ContextMenuListItem },
        template: `<ContextMenuListItem  />`
    }))