<template>
  <div class="detial">
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="tempContent">
      <detial-list :list="list"></detial-list>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetialList from './components/List'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetialList
  },
  data () {
    return {
      list: [
        {
          title: '成人票',
          id: '0001',
          children: [
            {
              title: '成人三馆联票',
              id: '0001',
              children: [
                {
                  title: '成人三馆联 - 某一连锁店',
                  id: '0001'
                }
              ]
            },
            {
              title: '成人五馆联票',
              id: '0002'
            }
          ]
        },
        {
          title: '学生票',
          id: '0002'
        },
        {
          title: '儿童票',
          id: '0003'
        },
        {
          title: '特惠票',
          id: '0004'
        }
      ]
    }
  },
  activated () {
    document.documentElement.scrollTop = 0
  }
}
</script>

<style lang="stylus" scoped>
  .tempContent
    height 50rem
</style>
