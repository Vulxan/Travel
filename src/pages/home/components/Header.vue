<template>
  <div class="header">
    <div class="header-lt"><div class="iconfont back-icon">&#xe624;</div></div>
    <div class="header-input"><span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题</div>
    <div class="header-rt">城市&nbsp;<span class="iconfont arrow-icon">&#xe64a;</span></div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/variables.styl';
  .header
    background-color $bgColor
    color #FFF
    line-height .86rem
    display flex
    .header-lt
      width .64rem
      .back-icon
        text-align center
        font-size .4rem
    .header-input
      margin-top .12rem
      height .64rem
      line-height .64rem
      margin-left .1rem
      padding-left .2rem
      flex 1
      background-color #FFF
      border-radius .05rem
      color #CCC
      overflow hidden
    .header-rt
      width 1.24rem
      text-align center
      .arrow-icon
        font-size .24rem
</style>
