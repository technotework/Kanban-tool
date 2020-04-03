<template>
    <div :class="$style.container">
        <template v-if="status == 'NO_ONE'">
            <ContextMenuContainer
                ref="container"
                @click.stop="onMenuTriggerClick"
            >
                <template #button>
                    <MembersIconList :members="members" v-model="myData" />
                </template>
                <template #menu>
                    <MembersCheckList
                        v-model="myData"
                        :members="members"
                        @close="onClose"
                        :parent-id="parentId"
                    />
                </template>
            </ContextMenuContainer>
        </template>
        <template v-if="status == 'OTHER'">
            <div :class="$style.other">
                <MemberIcon size="L" :img="editorImgSrc" :class="$style.icon" />
                <div :class="$style.line">EDITING...</div>
            </div>
        </template>
    </div>
</template>

<script>
/**
 * Member一覧をまとめるコンポーネント
 * 他人が編集中の場合は編集中のメンバーを表示する
 *
 * いちばん親：members-unit
 * メンバーアイコン一覧:members-icon-list -> member-icon
 * メンバーチェックリスト:members-check-list
 */
import MemberIcon from "@/components/organisms/members/member-icon/";
import MembersIconList from "@/components/organisms/members/members-icon-list/";
import MembersCheckList from "@/components/organisms/members/members-check-list/";
import ContextMenuContainer from "@/components/molecules/context-menu-container/";
export default {
    name: "MembersUnit",
    props: {
        members: Object, //全メンバーデータ
        value: Array, //チェックされているメンバーのArray
        status: String, //編集状態のステータス
        editor: String, //編集者
        id: String, //taskid
        parentId: String //boardId
    },
    computed: {
        myData: {
            get() {
                return this.value;
            },
            set(value) {
                this.$emit("input", value);
            }
        },
        editorImgSrc() {
            return this.members[this.editor].img;
        }
    },
    methods: {
        onMenuTriggerClick(e) {
            if (!e.status) {
                this.update();
            }
        },
        onClose() {
            this.$refs.container.onClose();
            this.update();
        },
        update() {
            this.$emit("update-member", {
                data: this.myData,
                id: this.id,
                parentId: this.parentId
            });
        }
    },
    components: {
        MemberIcon,
        ContextMenuContainer,
        MembersIconList,
        MembersCheckList
    }
};
</script>
<style lang="scss" module>
.other {
    position: relative;
}
.icon {
    position: absolute;
    margin: -15px 0px 0px 176px;
    z-index: 1000;
}
.line {
    @include editing;
    position: absolute;
    margin: 5px 0 0 0;
}
</style>
