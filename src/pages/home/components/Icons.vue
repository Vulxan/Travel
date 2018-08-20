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
  props: {
    list: Array
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
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
