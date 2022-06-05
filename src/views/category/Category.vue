<template>
  <div class="wrapper" ref='aaa'>
    <ul class="content">
      <button @click='btnClick'></button>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
      <li>111222333</li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Category',

  data() {
    return {
      scroll:null
    };
  },
  // 组件创建完后调用
  mounted () {
    this.scroll = new BScroll(document.querySelector('.wrapper'),{
      probeType:3,
      click:true,
      pullUpLoad:true,
    }),
    this.scroll.on('scroll',(position) =>{
      console.log(position);
    }),
    this.scroll.on('pullingUp',(positon)=>{
      console.log('上拉加载更多');
    })
  },
  methods: {
    btnClick(){
      console.log('btnClick');
    }
  }
};


</script>
<style  scoped>
  .wrapper{
    height: 200px;
    border: 1px solid black;
    overflow: hidden;
  }
</style>
