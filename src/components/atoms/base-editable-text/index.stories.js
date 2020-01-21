
import { storiesOf } from '@storybook/vue'
import BaseEditableText from './index.vue'

storiesOf('BaseEditableText', module)
    .add('default', () => ({
        components: { BaseEditableText },
        template: `<BaseEditableText  />`
    }));