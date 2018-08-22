<template>
  <div class="header">
    <router-link v-show="showAbs" tag="div" to="/" class="header-abs"><div class="iconfont header-abs-back">&#xe624;</div></router-link>
    <div class="header-fixed" :style="opacityStyle" v-show="!showAbs"><router-link tag="span" to="/" class="iconfont header-fixed-back">&#xe624;</router-link>景点详情</div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        this.showAbs = false
        let opacity = (top - 60) / 103
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/variables.styl';
  .header
    .header-abs
      position absolute
      left .2rem
      top .2rem
      width .8rem
      height .8rem
      border-radius .4rem
      background-color rgba(0, 0, 0, .8)
      text-align center
      line-height .8rem
      .header-abs-back
        color #FFF
        font-size .4rem
    .header-fixed
      font-size .3rem
      overflow hidden
      height $headerHeight
      line-height $headerHeight
      text-align center
      color #FFF
      background-color $bgColor
      position fixed
      top 0
      left 0
      right 0
      .header-fixed-back
        position absolute
        top 0
        left 0
        font-size .4rem
        width .64rem
        text-align center
        color #FFF
</style>
