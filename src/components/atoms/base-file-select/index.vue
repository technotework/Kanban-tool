<template>
    <div>
        <label :class="$style.button">
            <input type="file" accept="image/png, image/jpeg" @change="onFileChange" />
            ファイルを選択
        </label>
        <span :class="$style.filename">{{ imgName }}</span>
    </div>
</template>

<script>
/**
 * fileSelectのAtoms
 */
import base from "@/components/utils/base-mixin";
export default {
    mixins: [base],
    name: "BaseFileSelect",
    props: {},
    data() {
        return {
            uploadedImage: "",
            imgName: ""
        };
    },
    methods: {
        /**
         * handers
         */
        onFileChange(e) {
            let files = e.target.files || e.dataTransfer.files;
            let value = {};
            this.imgName = files[0].name;
            value.data = files[0];
            value.name = files[0].name;
            value.size = files[0].size;
            this.$emit("change", value);
        }
    }
};
</script>

<style lang="scss" module>
.button > input {
    display: none;
}
.button {
    @include secondaryInput;
}
.filename {
    display: inline-block;
    padding-left: $s8;
    @include secondaryInputSideText;
}
</style>
