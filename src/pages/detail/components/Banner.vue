<template>
  <div class="banner" @click="handleGallaryToggle">
    <div class="banner-wrapper">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1502/15/15ca1d0eab6bf46c.water.jpg_600x330_1108fbd3.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">东部华侨城大峡谷</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe60f;</span>
          15
        </div>
      </div>
    </div>
    <div class="gallary-wrapper"  v-if="showGallary">
      <connon-gallary :imgs="imgs" @close="handleGallaryToggle"></connon-gallary>
    </div>
  </div>
</template>

<script>
import ConnonGallary from '@/common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      imgs: ['http://img1.qunarzz.com/sight/p0/1502/15/15ca1d0eab6bf46c.water.jpg_r_800x800_a1f9671c.jpg', 'http://img1.qunarzz.com/sight/p0/201301/16/4593d3d5a27f445b93835fbb.jpg_r_800x800_8c52fe48.jpg'],
      showGallary: false
    }
  },
  methods: {
    handleGallaryToggle (isShow) {
      this.showGallary = !this.showGallary
      console.log(this.showGallary)
    }
  },
  components: {
    ConnonGallary
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
