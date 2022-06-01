<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="blue">
        <img slot="item-icon" src="~assets/img/tabbar/sy.png" alt="" />
        <img slot="item-icon-active" src="~assets/img/tabbar/sy2.png" />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="blue">
        <img slot="item-icon" src="assets/img/tabbar/应用.png" alt="" />
        <img slot="item-icon-active" src="assets/img/tabbar/应用2.png" />
        <div slot="item-text">应用</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="blue">
        <img slot="item-icon" src="assets/img/tabbar/购物车.png" alt="" />
        <img slot="item-icon-active" src="assets/img/tabbar/购物车2.png" />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile" activeColor="blue">
        <img slot="item-icon" src="assets/img/tabbar/我的.png" alt="" />
        <img slot="item-icon-active" src="assets/img/tabbar/我的2.png" />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "components/common/tabbar/Tabbar";
import TabBarItem from "components/common/tabbar/TabbarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>
