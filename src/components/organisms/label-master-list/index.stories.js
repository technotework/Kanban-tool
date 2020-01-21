
import { storiesOf } from '@storybook/vue'
import LabelMasterList from './index.vue'

storiesOf('LabelMasterList', module)
    .add('default', () => ({
        components: { LabelMasterList },
        template: `<LabelMasterList  />`
    }));