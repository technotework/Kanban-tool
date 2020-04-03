export default {
    props: {
        compose: {
            type: String
        }
    },
    methods: {
        onClick(e) {
            this.$emit("click", e);
        },
        onChange(e) {
            this.$emit("change", e);
        },
        onInput(e) {
            this.$emit("input", e);
        }
    }
};
