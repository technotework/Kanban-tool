
import { storiesOf } from '@storybook/vue'
import HolyGrailTop from './index.vue'

storiesOf('HolyGrailTop', module)
    .add('default', () => ({
        components: { HolyGrailTop },
        template: `<HolyGrailTop  />`
    }));