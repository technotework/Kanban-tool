
import { storiesOf } from '@storybook/vue'
import BaseText from './index.vue'

storiesOf('BaseText', module)
    .add('default', () => ({
        components: { BaseText },
        template: `<BaseText  />`
    }));