<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="left" class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center" class="title">
        <div
          v-for="(item, index) in titles"
          :key="index"
          class="title-item"
          :class="{ active: index === currentIndex }"
          @click="titleClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";

export default {
  name: "DetailNavBar",

  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  components: {
    NavBar,
  },

  mounted() {},

  methods: {
    titleClick(index) {
      this.currentIndex = index;
    },
    backClick() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.nav-bar{
  position: relative;
  z-index: 99;
}
.title {
  display: flex;
  font-size: 14px;
}

.title-item {
  flex: 1;
}

.active {
  color: var(--color-tint);
  border: solid 1px black;
  box-sizing: border-box;
  /* outline: black solid 1px; */
}

.back {
  margin-top: 10px;
}
.back img {
  width: 25px;
}
</style>
