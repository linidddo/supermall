<template>
  <div class="goods-item">
    <img :src="goodsItem.show.img" alt="" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">￥{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodListItem",
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
.goods-item {
  position: relative;
  padding-bottom: 40px;
  width: 48%;
}

.goods-item img {
  width: 100%;
  border-radius: 5px;
}

.goods-info {
  font-size: 12px;
  overflow: hidden;
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 4px;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.goods-info .price {
  color: var(--color-tint);
  margin-right: 20px;
}
.goods-info .collect {
  position: relative;
}

.goods-info .collect::before { 
  content: "";
  position: absolute;
  left: -16px;
  top: 1px;
  height: 14px;
  width: 14px;
  background-image: url("~assets/img/common/collect.svg");
  background-size: 14px 14px;
}
</style>
