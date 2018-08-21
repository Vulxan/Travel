<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="current-city">
        <div class="title">当前城市</div>
        <div class="city-wrapper">
          <div class="city border-right">{{ this.currentCity }}</div>
        </div>
      </div>
      <div class="hot-cities">
        <div class="title">热门城市</div>
        <div class="cities">
          <div class="city border" v-for="city of hot" :key="city.id" v-text="city.name" @click="handleCityClick(city.name)"></div>
        </div>
      </div>
      <div class="alpha-index">
        <div class="title">字母排序</div>
        <div class="indexes">
          <div class="index" v-for="(alpha, key) in cities" :key="key">
            <a class="anc" href="#" v-text="key"  @click.prevent="handleLetterClick"></a>
          </div>
        </div>
      </div>
      <div class="area">
        <template v-for="(alpha, key) in cities">
          <div class="title alpha-title" v-text="key" :key="key" :id="key"></div>
          <div class="item-list" :key="'part' + key">
            <div class="item" v-for="city of alpha" v-text="city.name" :key="city.id" @click="handleCityClick(city.name)"></div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, {click: true})
  },
  methods: {
    handleLetterClick (e) {
      this.scroll.scrollToElement('#' + e.target.innerText, 1000)
    },
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
      this.scroll.scrollTo(0, 0)
    },
    ...mapMutations(['changeCity'])
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
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
    .current-city
      .city-wrapper
        .city
          box-sizing border-box
          line-height .9rem
          width 33.33vw
          text-align center
        .border-right
          &::after
          &::before
            border-color rgb(234, 234, 235)
            border-width 3px
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
          width 16.6667vw
          text-align center
          .anc
            color #000
            display block
            width 100%
            height 100%
            padding .32rem .25rem
            box-sizing border-box
    .area
      .item-list
        display flex
        flex-wrap wrap
        .item
          color #666
          width 25vw
          text-align center
          box-sizing border-box
          padding .3rem 0
          border-right .02rem solid #EEE
          border-bottom .02rem solid #EEE
          &:nth-child(4n)
            border-right none
</style>
