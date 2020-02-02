export default {
    props: {
        width: { type: String },
        height: { type: String },
        color: { type: String },
        backgroundColor: { type: String },
        padding: { type: String },
        round: { type: String },
        top: { type: String },
        bottom: { type: String },
        left: { type: String },
        right: { type: String },
        url: { type: String },
    },
    computed: {
        styles() {
            return {
                "--w": this.width,
                "--h": this.height,
                "--p": this.padding,
                "--r": this.round,
                "--c": this.color,
                "--bgc": this.backgroundColor,
                "--pt": this.top,
                "--pb": this.bottom,
                "--pl": this.left,
                "--pr": this.right,
                "--url": `url("${this.url}")`
            };
        }
    },
    methods: {
        onClick() {
            this.$emit("click");
        },
        onChange() {
            this.$emit("change");
        },
        onInput(e) {
            this.$emit("input");
        }
    }
};