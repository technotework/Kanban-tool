
import { storiesOf } from '@storybook/vue'
import HolyGrailMain from './index.vue'

storiesOf('HolyGrailMain', module)
    .add('default', () => ({
        components: { HolyGrailMain },
        template: `<HolyGrailMain  />`
    }))