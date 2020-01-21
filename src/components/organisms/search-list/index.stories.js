
import { storiesOf } from '@storybook/vue'
import SearchList from './index.vue'

storiesOf('SearchList', module)
    .add('default', () => ({
        components: { SearchList },
        template: `<SearchList  />`
    }))