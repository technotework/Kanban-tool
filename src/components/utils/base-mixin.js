export default {
    props: {
        compose: {
            type: String
        },
    },
    methods: {
        onClick(e) {
            this.$emit("click");
        },
        onChange(e) {
            this.$emit("change");
        },
        onInput(e) {
            this.$emit("input");
        }
    }
};