
import { storiesOf } from '@storybook/vue'
import BaseModalContainer from './index.vue'

storiesOf('BaseModalContainer', module)
    .add('default', () => ({
        components: { BaseModalContainer },
        template: `<BaseModalContainer  />`
    }));