<template>
  <div>
    <template v-if="myData.length == 0">
      <BaseIcon type="member" :class="$style.icon" />
    </template>
    <template v-else>
      <ul :class="$style.wapper">
        <li
          v-for="member in myData"
          :key="member.key"
          :data-tooltip="member.nickname"
          :class="$style.tooltip"
        >
          <MemberIcon size="S" :img="member.img" />
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
import BaseIcon from "@/components/atoms/base-icon/";
import MemberIcon from "@/components/organisms/members/member-icon/";
export default {
  name: "MembersIconList",
  props: {
    members: Object,
    assigned: Array
  },
  computed: {
    myData() {
      let array = [];
      if (this.assigned != undefined) {
        for (let i = 0; i < this.assigned.length; i++) {
          let key = this.assigned[i];
          let member = this.members[key];
          member.altId = key;
          array.push(member);
        }
        return array;
      } else {
        return [];
      }
    }
  },
  methods: {},
  components: { MemberIcon, BaseIcon }
};
</script>
<style lang="scss" module>
.icon {
  width: 27px;
  height: 27px;
  padding: 4px 2px;
  fill: $theme;
}
.wapper {
  display: flex;
}
.wapper li {
  padding-right: 3px;
}
.tooltip {
  position: relative;
}
.tooltip::before,
.tooltip::after {
  position: absolute;
  transition: all 0.3s ease 0s;
  opacity: 0;
}
.tooltip::before {
  content: "";
  border: 1px solid transparent;
  border-bottom-color: $theme;
  top: -35px;
}
.tooltip::after {
  content: attr(data-tooltip);
  display: block;
  padding: 0 $s16;
  background: $theme;
  color: #fff;
  border-radius: 5px;
  top: -35px;
}
.tooltip:hover::before {
  opacity: 1;
}
.tooltip:hover::after {
  opacity: 1;
}
</style>