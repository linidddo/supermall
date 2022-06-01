<template>
  <div id="app">
    <router-view/>
    <main-tab-bar/>
  </div>
</template>

<script>
import MainTaber from "components/content/mainTabBar/MainTabBar.vue";
import MainTabBar from "../../tabbar/src/components/MainTabBar.vue";

export default {
  components: { MainTabBar },
};
</script>

<style></style>
