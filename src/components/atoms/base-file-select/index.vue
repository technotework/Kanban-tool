<template>
  <div>
    <input type="file" accept="image/png, image/jpeg" @change="onFileChange" />
  </div>
</template>

<script>
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
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;

      let value = {};

      value.data = files[0];
      value.name = files[0].name;
      value.size = files[0].size;
      this.$emit("change", value);
    },
    createImage(file) {
      const reader = new FileReader();
      reader.onload = e => {
        this.uploadedImage = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
};
</script>

<style lang="scss" module>
.imgContainer {
  @include r(100px);
  width: 100px;
  height: 100px;
  overflow: hidden;
}
.img {
  width: 100px;
  height: auto;
}
</style>
