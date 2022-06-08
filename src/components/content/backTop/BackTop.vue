<template>
  <div class="back-top">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'BackTop',  
  data() {
    return {
      
    };
  },
};
</script>

<style scoped>
  .back-top{
    position: absolute;
    display: flex;
    bottom: 60px;
    right: 20px
  }
  .back-top img{
    width: 43px;
    height: 43px;
  }
</style>