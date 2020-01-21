
import { storiesOf } from '@storybook/vue'
import SearchListItem from './index.vue'

storiesOf('SearchListItem', module)
    .add('default', () => ({
        components: { SearchListItem },
        template: `<SearchListItem  />`
    }));