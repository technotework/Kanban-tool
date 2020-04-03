/**
 * checkbox共通mixin
 */
export default {
    template: `<input type="checkbox" :id="id" :value="value" v-model="modelData" /></script>`,
    model: {
        prop: "model",
        event: "input"
    },
    name: "BaseCheckBox",
    props: {
        id: String,
        name: String,
        value: String
    },
    computed: {
        modelData: {
            get() {
                return this.model;
            },
            set(value) {
                this.$emit("input", value);
            }
        }
    }
};