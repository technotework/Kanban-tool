<template>
    <div ref="wrapper" :class="$style.wrapper" class="ignore">
        <BaseModelessContainer :class="$style.menu">
            <div :class="$style.title">参加メンバー</div>
            <ul :class="$style.listContainer">
                <li v-for="(item, key) in members" :key="key" :class="$style.list">
                    <LabeledCheckboxVmodel :id="key" :value="key" :name="key" v-model="myData">
                        <ImageIconedText
                            :img="item.img"
                            size="M"
                            compose="left"
                            :class="$style.icon"
                            >{{ item.nickname }}</ImageIconedText
                        >
                    </LabeledCheckboxVmodel>
                </li>
            </ul>
        </BaseModelessContainer>
    </div>
</template>

<script>
/**
 * メンバーチェックリスト
 *
 * いちばん親：members-unit
 * メンバーアイコン一覧:members-icon-list -> member-icon
 * メンバーチェックリスト:members-check-list
 */
import Vue from "vue";
import BaseModelessContainer from "@/components/atoms/base-modeless-container/";
import ImageIconedText from "@/components/molecules/image-iconed-text/";
import LabeledCheckboxVmodel from "@/components/molecules/labeled-check-box/model";
import listener from "@/components/utils/listener-mixin";
export default {
    name: "MembersCheckList",
    mixins: [listener],
    created: function() {
        //自分以外を押されたら閉じる
        this.listen(
            window,
            "click",
            function(e) {
                if (!this.$el.contains(e.target)) {
                    this.$emit("close");
                }
            }.bind(this)
        );
    },
    mounted: function() {
        //画面内の位置によって場所を補正する
        Vue.nextTick(() => {
            let ww = document.documentElement.clientWidth;
            let wh = document.documentElement.clientHeight;

            let x = this.$refs.wrapper.getBoundingClientRect().x;
            let y = this.$refs.wrapper.getBoundingClientRect().y;
            let menuW = 250 + x;
            let menuH = 300 + y;

            //現在のスタイルの取得
            let el = this.$refs.wrapper;
            let currentMT = Number(getComputedStyle(el, "").marginTop.replace("px", ""));
            let currentML = Number(getComputedStyle(el, "").marginLeft.replace("px", ""));

            //差分とゲタ分で位置調整
            if (menuW > ww) {
                var diffW = menuW - ww + 70;
                el.style.marginLeft = currentML - diffW + "px";
            }
            if (menuH > wh) {
                var diffH = menuH - wh + 30;
                el.style.marginTop = currentMT - diffH + "px";
            }
        });
    },
    props: {
        members: Object, //前メンバー
        value: Array, //チェックされているメンバー
        parentId: String
    },
    computed: {
        myData: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit("input", value);
            }
        }
    },
    methods: {},
    components: {
        ImageIconedText,
        LabeledCheckboxVmodel,
        BaseModelessContainer
    }
};
</script>
<style lang="scss" module>
.wrapper {
    position: absolute;
    margin: -100px 0 0 151px;
}

.title {
    width: 100%;
    margin-bottom: $s16;
    @include memberTitle;
}

.menu {
    width: 250px;
    height: 300px;
}

.listContainer {
    width: 100%;
    height: calc(100% - 48px);
    overflow-y: auto;
}

.list {
    padding-bottom: $s16;
    @include memberList;
}
.list input[type="checkbox"] {
    margin-top: 1px;
}
.icon {
    padding-left: $s4;
}
</style>
