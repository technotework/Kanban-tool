export default {
    props: {
        width: { type: String },
        height: { type: String },
        minWidth: { type: String },
        minHeight: { type: String },
        maxWidth: { type: String },
        maxHeight: { type: String },
        color: { type: String },
        backgroundColor: { type: String },
        padding: { type: String },
        margin: { type: String },
        round: { type: String },
        top: { type: String },
        bottom: { type: String },
        left: { type: String },
        right: { type: String },
        url: { type: String },
        index: { type: String },
        compose: { type: String },
    },
    computed: {
        styles() {
            return {
                "--w": this.width,
                "--mw": this.minWidth,
                "--mxw": this.maxWidth,
                "--h": this.height,
                "--mh": this.minHeight,
                "--mxh": this.maxHeight,
                "--p": this.padding,
                "--m": this.margin,
                "--r": this.round,
                "--c": this.color,
                "--bgc": this.backgroundColor,
                "--pt": this.top,
                "--pb": this.bottom,
                "--pl": this.left,
                "--pr": this.right,
                "--url": this.url ? `url("${this.url}")` : null,
                "--index": this.index,
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