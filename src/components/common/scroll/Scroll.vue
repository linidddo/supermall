<template>
<!-- ref/childen -->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
    };
  },
  updated () {
      this.scroll = new BScroll(this.$refs.wrapper,{
        click:true,
    })
  },
  mounted () {
  
  }
}
</script>

<style></style>
