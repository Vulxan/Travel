<template>
  <div class="search">
    <div class="search-bar">
      <input type="text" class="search-input" v-model="keyword" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" ref="search" v-show="!hasNoInput">
      <ul>
        <li v-for="item of list" v-text="item.name" :key="item.id" class="search-item border-bottom" @click="handleCityClick(item.name)"></li>
        <li class="search-item border-bottom" v-show="hasNoData">没有匹配的城市</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    },
    hasNoInput () {
      return this.keyword.trim() === ''
    }
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
      this.keyword = ''
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach(val => {
            if (val.spell.indexOf(this.keyword.trim()) > -1 || val.name.indexOf(this.keyword.trim()) > -1) {
              result.push(val)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  props: {
    cities: Object
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search, {click: true})
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/variables.styl';
  .search
    height .72rem
    padding 0 .1rem
    background-color $bgColor
    .search-bar
      .search-input
        box-sizing border-box
        padding 0 .1rem
        height .62rem
        width 100%
        text-align center
        border-radius .06rem
        color #666
    .search-content
      position absolute
      top 1.56rem
      left 0
      right 0
      bottom 0
      overflow hidden
      z-index 1
      background-color #EEE
      .search-item
        line-height .62rem
        padding .1rem
        background-color #FFF
        color #666
</style>
