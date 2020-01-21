
import { storiesOf } from '@storybook/vue'
import TableHeader from './index.vue'

storiesOf('TableHeader', module)
    .add('default', () => ({
        components: { TableHeader },
        template: `<TableHeader  />`
    }))