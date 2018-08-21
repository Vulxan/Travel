<template>
  <div class="header">
    <div class="header-lt"><div class="iconfont back-icon">&#xe624;</div></div>
    <div class="header-input"><span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题</div>
    <router-link to="/city">
      <div class="header-rt">{{ this.city }}&nbsp;<span class="iconfont arrow-icon">&#xe64a;</span></div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/variables.styl';
  .header
    background-color $bgColor
    color #FFF
    line-height $headerHeight
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
      color #FFF
      min-width 1.04rem
      padding 0 .1rem
      text-align center
      .arrow-icon
        font-size .24rem
</style>
