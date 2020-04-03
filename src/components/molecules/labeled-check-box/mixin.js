//共通設定
export default {
    model: {
        prop: "model",
        event: "input"
    },
    name: "LabeledCheckbox",
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
