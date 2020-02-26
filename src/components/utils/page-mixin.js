export default {
    created() {
        this.disableMessage = false;
    },
    destroyed() {
        this.disableMessage = true;
    },
    data: () => {
        return {
            disableMessage: false
        };
    },
};