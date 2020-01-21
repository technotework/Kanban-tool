
import { storiesOf } from '@storybook/vue'
import HolyGrailLayout from './index.vue'

storiesOf('HolyGrailLayout', module)
    .add('default', () => ({
        components: { HolyGrailLayout },
        template: `<HolyGrailLayout  />`
    }))