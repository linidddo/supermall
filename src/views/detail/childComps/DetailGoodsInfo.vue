<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
    <div class="info-desc">
      <div class="start"></div>
      <div class="dsec">{{ detailInfo.desc }}</div>
      <div class="end"></div>
    </div>

    <div v-for="(item, index) in detailInfo.detailImage" :key="index">
      <div class="info-key">{{ item.key }}</div>
      <div class="info-list">
        <img v-for="(item1, index1) in item.list" :src="item1" :key="index1" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>

.goods-info {
  position: relative;
  display: flex;
  flex-direction:column;
  background-color: #fff;
  text-align: left;
}
.info-desc{
  padding: 10px 5px;
  
}
.info-desc .start{
  border-bottom: 1px solid black;
  width: 100px;
  margin: 10px 5px;
  position: relative;
}
.info-desc .end{
  border-bottom: 1px solid black;
  width: 30%;
  margin: 10px 5px;
  float: right;
  position: relative;
}

.info-desc .start::before,
.info-desc .end::after{
  content: '';
  display: block;
  width: 5px;
  height: 5px;
  background-color: black;
  position: absolute;
  bottom: 0;
  
}
.info-desc .end::after{
  right: 0;
}

.info-desc .dsec{
  margin-left: 5px;
}

.info-key{
  margin-left: 10px;
  margin-bottom: 5px;
  font-size: 14px;
}
.info-list img{
  width: 100%;
}
</style>
