<template>
  <div class="detial">
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="tempContent"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader
  }
}
</script>

<style lang="stylus" scoped>
  .tempContent
    height 50rem
</style>
