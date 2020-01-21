
import { storiesOf } from '@storybook/vue'
import BothSideLayout from './index.vue'

storiesOf('BothSideLayout', module)
    .add('default', () => ({
        components: { BothSideLayout },
        template: `<BothSideLayout  />`
    }))