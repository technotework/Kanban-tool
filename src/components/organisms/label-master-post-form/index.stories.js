
import { storiesOf } from '@storybook/vue'
import LabelMasterPostForm from './index.vue'

storiesOf('LabelMasterPostForm', module)
    .add('default', () => ({
        components: { LabelMasterPostForm },
        template: `<LabelMasterPostForm  />`
    }))