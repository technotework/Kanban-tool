export default {
    computed: {
        styles() {
            return {
                "--w": this.width,
                "--h": this.height,
                "--mw": this.minWidth,
                "--mh": this.minHeight,
                "--mxw": this.maxWidth,
                "--mxh": this.maxHeight,
                "--p": this.padding,
                "--m": this.margin,
                "--r": this.round
            };
        }
    }
};
