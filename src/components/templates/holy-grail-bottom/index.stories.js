
import { storiesOf } from '@storybook/vue'
import HolyGrailBottom from './index.vue'

storiesOf('HolyGrailBottom', module)
    .add('default', () => ({
        components: { HolyGrailBottom },
        template: `<HolyGrailBottom  />`
    }))