
import { storiesOf } from '@storybook/vue'
import ContextMenuList from './index.vue'

storiesOf('ContextMenuList', module)
    .add('default', () => ({
        components: { ContextMenuList },
        template: `<ContextMenuList  />`
    }))