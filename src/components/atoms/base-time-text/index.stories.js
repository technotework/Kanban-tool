
import { storiesOf } from '@storybook/vue'
import BaseTimeText from './index.vue'

storiesOf('BaseTimeText', module)
    .add('default', () => ({
        components: { BaseTimeText },
        template: `<BaseTimeText  />`
    }));