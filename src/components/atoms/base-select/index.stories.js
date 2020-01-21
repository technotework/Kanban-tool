
import { storiesOf } from '@storybook/vue'
import BaseSelect from './index.vue'

storiesOf('BaseSelect', module)
    .add('default', () => ({
        components: { BaseSelect },
        template: `<BaseSelect  />`
    }))