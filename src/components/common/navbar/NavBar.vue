<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",

  data() {
    return {};
  },
};
</script>
<style scoped>
.nav-bar {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  box-shadow: 0px 3px 1px rgba(100, 100, 100, 0.1);
  background-color: #fff;
}

.left,
.right {
  width: 60px;
  /* border: 1px solid black; */
}

.center {
  flex: 1;
  /* border: 1px solid black; */
}
</style>
