<template>
  <div class="banner" @click="handleGallaryToggle">
    <div class="banner-wrapper">
      <img class="banner-img" :src="bannerImg" alt="">
      <div class="banner-info">
        <div class="banner-title" v-text="sightName"></div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe60f;</span>
          {{ this.bannerImgs.length }}
        </div>
      </div>
    </div>
    <fade-animation>
      <connon-gallary :imgs="bannerImgs" @close="handleGallaryToggle" v-show="showGallary"></connon-gallary>
    </fade-animation>
  </div>
</template>

<script>
import ConnonGallary from '@/common/gallary/Gallary'
import FadeAnimation from '@/common/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false
    }
  },
  methods: {
    handleGallaryToggle (isShow) {
      this.showGallary = !this.showGallary
    }
  },
  props: {
    sightName: String,
    bannerImg: String,
    bannerImgs: Array
  },
  components: {
    ConnonGallary,
    FadeAnimation
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    height 55vw
    .banner-img
      height 100%
      width 100%
    .banner-info
      color #FFF
      display flex
      align-items center
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      background-image linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8 ))
      .banner-title
        font-size .32rem
        padding 0 .2rem
        flex-grow 1
      .banner-number
        padding 0 .3rem
        height .4rem
        line-height .4rem
        border-radius .2rem
        background-color rgba(0, 0, 0, .8)
        font-size .24rem
        margin 0 .2rem
        .banner-icon
          font-size .24rem
</style>
