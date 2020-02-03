export default {
    props: {
        compose: { type: String },
    },
    methods: {
        onClick() {
            this.$emit("click");
        },
        onChange() {
            this.$emit("change");
        },
        onInput() {
            this.$emit("input");
        }
    }
};