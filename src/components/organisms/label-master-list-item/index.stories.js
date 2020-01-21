
import { storiesOf } from '@storybook/vue'
import LabelMasterListItem from './index.vue'

storiesOf('LabelMasterListItem', module)
    .add('default', () => ({
        components: { LabelMasterListItem },
        template: `<LabelMasterListItem  />`
    }))