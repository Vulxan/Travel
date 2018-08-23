<template>
  <div class="list">
    <div class="item" v-for="item of list" :key="item.id">
      <div class="item-title border-bottom"><span class="item-title-icon"></span>{{ item.title }}</div>
      <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .list
    .item
      .item-title
        line-height .8rem
        font-size .32rem
        padding 0 .2rem
        .item-title-icon
          position relative
          display inline-block
          left .06rem
          top .06rem
          line-height .8rem
          width .36rem
          height .36rem
          background url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
          margin-right .1rem
          background-size .4rem 3rem
      .item-children
        padding 0 .2rem
</style>
