<template>
  <div class="gallary"  @click.stop="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item, index) of imgs" :key="index"><img :src="item" alt="#" class="swiper-img"></swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        observer: true,
        observeParents: true,
        effect: 'flip'
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .gallary
    display flex
    flex-direction column
    justify-content center
    z-index 99
    position fixed
    top 0
    right 0
    bottom 0
    left 0
    background-color #000
    .wrapper
      width 100%
      height 100vw
      .swiper-container
        height 100%
        overflow inherit
        .swiper-slide
          display flex
          align-items center
        .swiper-img
          width 100%
          display block
        .swiper-pagination
          color #FFF
          bottom -1rem
</style>
