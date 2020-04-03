<template>
    <div>
        <template v-if="myData.length == 0">
            <BaseIcon type="member" :class="$style.icon" />
        </template>
        <template v-else>
            <ul :class="$style.wapper">
                <li
                    v-for="(member, index) in myData"
                    :key="index"
                    :data-tooltip="member.nickname"
                >
                    <MemberIcon size="S" :img="member.img" />
                </li>
            </ul>
        </template>
    </div>
</template>

<script>
/**
 * メンバーアイコン一覧
 *
 * いちばん親：members-unit
 * メンバーアイコン一覧:members-icon-list -> member-icon
 * メンバーチェックリスト:members-check-list
 */
import BaseIcon from "@/components/atoms/base-icon/";
import MemberIcon from "@/components/organisms/members/member-icon/";
export default {
    name: "MembersIconList",
    props: {
        members: Object,
        value: Array
    },
    computed: {
        myData: {
            get() {
                let array = [];
                if (this.value != undefined) {
                    for (let i = 0; i < this.value.length; i++) {
                        let key = this.value[i];
                        let member = this.members[key];
                        member.altId = key;
                        array.push(member);
                    }
                }
                return array;
            },
            set(value) {
                this.$emit("input", value);
            }
        }
    },
    methods: {},
    components: { MemberIcon, BaseIcon }
};
</script>
<style lang="scss" module>
.icon {
    position: relative;
    width: 27px;
    height: 27px;
    padding: 5px 1px 3px 2px;
    fill: $theme;
}
.wapper {
    display: flex;
    flex-wrap: wrap;
}
.wapper li {
    padding-right: 3px;
}
</style>
