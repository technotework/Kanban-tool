<template>
    <div :class="$style.wrapper">
        <form @submit.prevent>
            <div :class="$style.navContainer">
                <div :class="$style.navLabel">Preview</div>
                <BaseIcon type="dot" :class="$style.navIcon" />
            </div>

            <div :class="$style.preview">
                <IconXL :img="src" />
                <div :class="$style.name">
                    {{ nickname == "" ? temp : nickname }}
                </div>
            </div>

            <span :class="$style.title">
                <span :class="$style.titleInner">プロフィール入力</span>
            </span>

            <span :class="$style.label">ニックネーム</span>
            <SystemInput v-model="nickname" required :class="$style.item" />

            <span :class="$style.label">アイコン</span>
            <BaseFileSelect @change="onFileSelect" :class="$style.file" />
            <div :class="$style.bottoms">
                <BaseSubmitButton @click="onSubmit" value="登録" :class="$style.button" />
            </div>
        </form>
    </div>
</template>

<script>
/**
 *プロフィール入力コンポーネント
 */
import { SystemInput } from "@/components/atoms/base-input/compose";
import BaseFileSelect from "@/components/atoms/base-file-select/";
import { IconXL } from "@/components/atoms/base-image-icon/compose";
import BaseSubmitButton from "@/components/atoms/base-submit-button/";
import BaseIcon from "@/components/atoms/base-icon/";

import base from "@/components/utils/base-mixin";
export default {
    mixins: [base],
    name: "UserInfoForm",
    data: () => {
        return {
            nickname: "",
            temp: "nickname",
            size: null,
            img: null,
            src: null
        };
    },
    props: {},
    methods: {
        onFileSelect(value) {
            let { data, name, size } = value;
            this.img = value;
            this.size = size;

            const reader = new FileReader();
            reader.onload = e => {
                this.src = e.target.result;
            };
            reader.readAsDataURL(data);
        },
        onSubmit() {
            this.$emit("submit-profile-event", {
                data: this.img,
                size: this.size,
                nickname: this.nickname
            });
        }
    },
    components: {
        SystemInput,
        BaseFileSelect,
        IconXL,
        BaseSubmitButton,
        BaseIcon
    }
};
</script>

<style lang="scss" module>
.wrapper {
    position: relative;
    max-width: 350px;
    margin: 66px auto 0 auto;
}

.preview {
    width: 350px;
    display: flex;
    align-items: center;

    padding-bottom: 54px;
}

.icon {
    margin-bottom: $s4;
    text-align: right;
}

.title {
    @include primaryTab;
    margin-bottom: 14px;
}

.titleInner {
    margin: 0 20px;
}

.name {
    @include previewNickName;
}

.item {
    margin: 0 0 19px 0;
}

.label {
    @include authLabel;
}

.file {
    padding-top: 10px;
    height: 54px;
}

.button {
    display: inline-block;
    width: 86px;
}

.bottoms {
    display: flex;
    justify-content: flex-end;
}

.navContainer {
    position: absolute;
    top: 0;
    right: 0;
    overflow: hidden;
    height: 25px;
}

.navLabel {
    display: inline-block;
    padding: 0 6px 8px 4px;
    @include nav;
}

.navIcon {
    position: absolute;
    bottom: 0px;
    left: 0px;
    display: block;
    width: 91px;
    height: 10px;
    fill: $white;
    opacity: 0.4;
}
</style>
