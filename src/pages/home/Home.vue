<template>
  <div class="home">
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons :list="iconList"></home-icons>
    <home-recommend :list="recList"></home-recommend>
    <home-weekend :list="weList"></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: [],
      recList: [],
      weList: []
    }
  },
  components: {HomeHeader, HomeSwiper, HomeIcons, HomeRecommend, HomeWeekend},
  methods: {
    getHomeInfo () {
      axios.get('/api/home.json?city=' + this.city).then(this.getHomeInfoSucc) // Dev
      // axios.get('/Travel/mock/home.json?city=' + this.city).then(this.getHomeInfoSucc) // Prod
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recList = data.recommedList
        this.weList = data.weekendList
      }
    }
  },
  computed: {
    ...mapState(['city'])
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}

</script>

<style>

</style>
