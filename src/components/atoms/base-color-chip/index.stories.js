
import { storiesOf } from '@storybook/vue'
import BaseColorChip from './index.vue'

storiesOf('BaseColorChip', module)
    .add('default', () => ({
        components: { BaseColorChip },
        template: `<BaseColorChip  />`
    }))