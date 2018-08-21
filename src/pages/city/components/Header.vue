<template>
  <div class="header"><router-link to="/"><span class="iconfont header-back">&#xe624;</span></router-link>城市选择</div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/variables.styl';
  .header
    font-size .3rem
    overflow hidden
    height $headerHeight
    line-height $headerHeight
    text-align center
    color #FFF
    background-color $bgColor
    position relative
    .header-back
      position absolute
      top 0
      left 0
      font-size .4rem
      width .64rem
      text-align center
      color #FFF
</style>
