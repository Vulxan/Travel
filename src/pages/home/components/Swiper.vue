<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
    <!-- slides -->
      <swiper-slide v-for="item of list" :key="item.id"><a href="#"><img :src="item.imgUrl" alt="#" class="swiper-img"></a></swiper-slide>
    <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: true
      }
    }
  },
  props: {
    list: Array
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active {
    background-color #FFF
  }

  .wrapper
    background-color #EEE
    width 100%
    height 26.77vw
    .swiper-img
      width 100%
</style>
