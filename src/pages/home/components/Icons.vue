<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="icon of page" :key="icon.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="icon.imgUrl" :alt="icon.desc">
          </div>
        <div class="icon-desc" v-text="icon.desc"></div>
      </div>
      </swiper-slide>
    </swiper>

  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: JSON.parse('[{"id":"0001","imgUrl":"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png","desc":"景点门票"},{"id":"0002","imgUrl":"http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png","desc":"水上乐园"},{"id":"0003","imgUrl":"http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png","desc":"游乐场"},{"id":"0004","imgUrl":"http://img1.qunarzz.com/piao/fusion/1803/50/26ffa31b56646402.png","desc":"海洋馆"},{"id":"0005","imgUrl":"http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png","desc":"动植物园"},{"id":"0006","imgUrl":"http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png","desc":"玩转长隆"},{"id":"0007","imgUrl":"http://img1.qunarzz.com/piao/fusion/1803/b6/37560ece9c62b502.png","desc":"城市观光"},{"id":"0008","imgUrl":"http://img1.qunarzz.com/piao/fusion/1803/27/dac2bcf9added702.png","desc":"海滨沙滩"},{"id":"0009","imgUrl":"http://img1.qunarzz.com/piao/fusion/1804/95/8d02011d149bdb02.png","desc":"汽车票"},{"id":"00010","imgUrl":"http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png","desc":"全部玩乐"}]')
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/variables.styl';
  @import '~@/assets/styles/mixins.styl';

  .icons >>> .swiper-slide
    display flex
    flex-wrap wrap

  .icons
    margin-top .1rem
    .icon
        width 25vw
        height 25vw
        .icon-img
          box-sizing border-box
          padding .1rem
          height 18vw
          width 18vw
          margin auto
          .icon-img-content
            display block
            width 100%
            height 100%
        .icon-desc
          height 7vw
          line-height 7vw
          text-align center
          color $darkTextColor
          ellipsis()
</style>
