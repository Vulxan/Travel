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
      opacityStyle: {
        opacity: 1
      },
      top: 0
    }
  },
  computed: {
    showAbs () {
      if (this.top > 60) {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    handleScroll () {
      this.top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
      let opacity = (this.top - 60) / 103
      opacity = opacity > 1 ? 1 : opacity
      opacity = opacity < 0 ? 0 : opacity
      this.opacityStyle = { opacity }
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
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
      z-index 2
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
