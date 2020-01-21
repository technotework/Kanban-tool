
import { storiesOf } from '@storybook/vue'
import HolyGrailRight from './index.vue'

storiesOf('HolyGrailRight', module)
    .add('default', () => ({
        components: { HolyGrailRight },
        template: `<HolyGrailRight  />`
    }));