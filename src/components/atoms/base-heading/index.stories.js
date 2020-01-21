
import { storiesOf } from '@storybook/vue'
import BaseHeading from './index.vue'

storiesOf('BaseHeading', module)
    .add('default', () => ({
        components: { BaseHeading },
        template: `<BaseHeading  />`
    }));