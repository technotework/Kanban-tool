
import { storiesOf } from '@storybook/vue'
import TableRow from './index.vue'

storiesOf('TableRow', module)
    .add('default', () => ({
        components: { TableRow },
        template: `<TableRow  />`
    }));