
import { storiesOf } from '@storybook/vue'
import HolyGrailLeft from './index.vue'

storiesOf('HolyGrailLeft', module)
    .add('default', () => ({
        components: { HolyGrailLeft },
        template: `<HolyGrailLeft  />`
    }))