<template>
  <div class="detail">
    <detail-nav-bar  />
    <scroll class="content" ref="scroll">
      <detail-swiper :topImages="topImages" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shopInfo" />
      <detail-goods-info :detailInfo="detailInfo" />
      <detail-params-info :params='params' />
    </scroll>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamsInfo from "./childComps/DetailParamsInfo";

import Scroll from "components/common/scroll/Scroll";

import { getDetail, Goods } from "network/detail";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamsInfo,
    Scroll,
  },
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shopInfo: {},
      detailInfo: {},
      params: {},
    };
  },
  created() {
    // 1.保存传入的iid
    this.iid = this.$route.params.iid;

    // 2.根据iid请求详细数据
    getDetail(this.iid).then((res) => {
      // 1.获取数据
      const data = res.result;

      // 2.取出轮播图的数据
      this.topImages = data.itemInfo.topImages;

      // 3.创建商品的对象
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );

      // 4.取出店铺信息
      this.shopInfo = data.shopInfo;

      // 5.取出详情的信息
      this.detailInfo = data.detailInfo;
      console.log(data);

      this.params = data.itemParams;
      console.log(this.params);
    });
  },
  updated() {
    this.$refs.scroll.refresh();
  },

  methods: {},
};
</script>

<style scoped>
.detail {
  position: relative;
  z-index: 10;
  background-color: #fff;
  height: 100vh;
}

.content {
  height: calc(100% - 44px - 49px);
}
</style>
