<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="hot-cities">
        <div class="title">热门城市</div>
        <div class="cities">
          <div class="city border">北京</div>
          <div class="city border">上海</div>
          <div class="city border">三亚</div>
          <div class="city border">香港</div>
          <div class="city border">杭州</div>
          <div class="city border">广州</div>
          <div class="city border">成都</div>
          <div class="city border">深圳</div>
          <div class="city border">苏州</div>
          <div class="city border">桂林</div>
          <div class="city border">西安</div>
          <div class="city border">厦门</div>
        </div>
      </div>
      <div class="alpha-index">
        <div class="title">字母排序</div>
        <div class="indexes">
          <div class="index">A</div>
          <div class="index">B</div>
          <div class="index">C</div>
          <div class="index">D</div>
          <div class="index">E</div>
          <div class="index">F</div>
          <div class="index">G</div>
          <div class="index">H</div>
          <div class="index">J</div>
          <div class="index">K</div>
          <div class="index">L</div>
          <div class="index">M</div>
          <div class="index">N</div>
          <div class="index">P</div>
          <div class="index">Q</div>
          <div class="index">R</div>
          <div class="index">S</div>
          <div class="index">T</div>
          <div class="index">W</div>
          <div class="index">X</div>
          <div class="index">Y</div>
          <div class="index">Z</div>
        </div>
      </div>
      <div class="area">
        <div class="title alpha-title">A</div>
        <div class="item-list">
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
        </div>
        <div class="title alpha-title">A</div>
        <div class="item-list">
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
        </div>
        <div class="title alpha-title">A</div>
        <div class="item-list">
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
          <div class="item">阿拉尔</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/variables.styl';
  .list
    overflow hidden
    position absolute
    top 1.56rem
    right 0
    bottom 0
    left 0
    .title
      line-height .24rem
      padding .24rem .3rem
      font-size .24rem
      background-color rgb(245, 245, 245)
    .hot-cities
      .cities
        display flex
        flex-wrap wrap
        justify-content center
        .city
          width 33.33vw
          text-align center
          box-sizing border-box
          padding .31rem .5rem
        .border
          &::before
          &::after
            border-color #DDD
    .alpha-index
      .indexes
        margin .2rem 0
        display flex
        flex-wrap wrap
        .index
          box-sizing border-box
          width 16.6667vw
          text-align center
          padding .32rem .25rem
    .area
      .item-list
        display flex
        flex-wrap wrap
        .item
          color #666
          width 25vw
          text-align center
          box-sizing border-box
          padding .3rem
          border-right .02rem solid #EEE
          border-bottom .02rem solid #EEE
          &:nth-child(4n)
            border-right none
</style>
