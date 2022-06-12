<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      class="tab-control"
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControl1"
      v-show="isTabFixed"
    />
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad" />
      <recommend-view :recommends="recommends" />
      <feature-view />
      <tab-control
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl2"
      />
      <good-list :goods="showGoods" />
    </scroll>

    <back-top @click.native="btnClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabControl/TabControl.vue";
import GoodList from "components/content/goods/GoodList.vue";
import BackTop from "components/content/backTop/BackTop.vue";

import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import FeatureView from "./childComps/FeatureView.vue";

import { getHomeNultidata, getHomeGoods } from "network/home";
import { debounce } from "../../common/utils";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop: false,
      itemImgListener: null,
      tabOffsetTop: 0,
      isTabFixed: false,
      saveY: 0,
    };
  },
  // 在组件创建完成后发送网络请求
  created() {
    // 1.请求多个数据
    this.getHomeNultidata();

    // 2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },

  // 在mounted阶段，vue实例挂载完成，data.message成功渲染。
  mounted() {
    // 1.图片加载完成的事件监听
    const refresh = debounce(this.$refs.scroll.refresh, 50);
    this.$bus.$on("itemImageLoad", () => {
      this.$refs.scroll && this.$refs.scroll.refresh();
    });
  },
  methods: {
    // 事件监听相关方法
    // tab的点击 点击时拿到默认index的值
    tabClick(index) {
      console.log(index);
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }

      // 两个tabControl中的active样式显示的一致
      // 调用tabControl.vue中的方法 将index的值传入 currentIndex
      // 当currentIndex 和 tabControl中的titles的index 一致时，会添加一个选中的样式
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },

    // 点击按钮回到顶部
    btnClick() {
      // 通过ref 调用 scroll.vue中的方法
      this.$refs.scroll.scrollTo(0, 0);
      console.log("回到顶部");
    },

    //滚动位置判断  由子组件Scroll传入的监听函数
    // position为子组件传入的值
    contentScroll(position) {
      // 1.判断BackTop是否显示
      this.isShowBackTop = -position.y > 1000;

      // 2.决定tabControl是否吸顶（positon:fixed）
      console.log("this.tabOffsetTop" + this.tabOffsetTop);
      // 滚动页面时开始监听 ， 如果滚动的y轴 大于 607时 显示 tabControl 1，否则不显示 tabControl 1
      this.isTabFixed = -position.y > this.tabOffsetTop;
      // console.log(this.isTabFixed);
    },

    //下拉加载更多
    loadMore() {
      console.log("加载更多");
      // 调用getHomeGoods函数，此时page已经+1 请求下一页的数据
      this.getHomeGoods(this.currentType);
    },

    //获取 tabControl 2 的offsetTopl
    swiperImageLoad() {
      // 所有的组件中都有一个$el 用来获取组件中的元素
      // 通过ref的值来获取
      console.log(
        "tabControl2 offertTop" + this.$refs.tabControl2.$el.offsetTop
      );
      // 存入tabOffsetTop // 607
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },

    // ··········网络请求相关方法··············
    //请求首页轮播图的数据 和 轮播图下面4个链接的数据
    getHomeNultidata() {
      getHomeNultidata().then((res) => {
        try {
          //保存数据到banners，和recommends中
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        } catch (error) {
          console.log(error);
        }
      });
    },
    //请求到的页面商品数据
    //type表示商品的类型，依次传入pop,new,sell，
    getHomeGoods(type) {
      // this.goods 中的page默认为0，所以需要加1，拿到第一页中pop的值
      const page = this.goods[type].page + 1;
      console.log("page=" + page); //page = 1
      //type:pop page:1传入 拿到数据
      getHomeGoods(type, page).then((res) => {
        console.log(res);
        //把请求下来的数据存入到goods对象中，入栈压入
        this.goods[type].list.push(...res.data.list);
        // 第一页的数据全部请求完成 准备第二页的数据
        this.goods[type].page += 1;
        //当上拉加载数据加载完毕后，需要调用此方法告诉 better-scroll 数据已加载。
        this.$refs.scroll.finishPullUp();
      });
    },
  },
  destroyed() {
    console.log("home销毁");
  },

  // better scroll 插件的bug已经修复  keep-alive可以直接使用
  // 不需要再储存当前saveY的值
  // keep-alive 专属组件被激活时调用
  // activated() {
  //   console.log('activated');
    // 切换页面后 回到原来的位置
  //   this.$refs.scroll.scrollTo(0,this.saveY ,0)
    // 做一次刷新 防止产生bug
  //   this.$refs.scroll.refresh()
  // },
  // keep-alive 专属组件被销毁时调用
  // deactivated() {
  //   console.log('deactivated');
    // 切换页面后 保存位置状态
  //   this.saveY = this.$refs.scroll.getScrollY;
  // },
};
</script>

<style scoped>
.home-nav {
  /*  全局中定义的color */
  background-color: var(--color-tint);
  color: white;
  /* 在使用浏览器原生滚动时，为了让导航不滚动 */
  /* position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 99; */
}
.tab-control {
  position: relative;
  z-index: 9;
}

.content {
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  /* height: 300px; */
  /* overflow: hidden; */
}
</style>
