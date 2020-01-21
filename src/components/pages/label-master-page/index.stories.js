
import { storiesOf } from '@storybook/vue'
import LabelMasterPage from './index.vue'

storiesOf('LabelMasterPage', module)
    .add('default', () => ({
        components: { LabelMasterPage },
        template: `<LabelMasterPage  />`
    }));