
import { storiesOf } from '@storybook/vue'
import TableCol from './index.vue'

storiesOf('TableCol', module)
    .add('default', () => ({
        components: { TableCol },
        template: `<TableCol  />`
    }))