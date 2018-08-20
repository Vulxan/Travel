<template>
  <div class="weekend">
    <div class="title">周末去哪儿</div>
    <ul>
      <li v-for="item of list" :key="item.id">
        <div class="item-image-wrapper">
          <img class="item-image" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <div class="item-title" v-text="item.title"></div>
          <div class="item-desc" v-text="item.desc"></div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/variables.styl';

  .weekend
    background-color #EEE
    li
      background-color #FFF
      margin-bottom .1rem
      &:last-child
        margin-bottom 0
    .title
      margin-top .2rem
      line-height .8rem
      background-color #EEE
      text-indent .2rem
    .item-image-wrapper
      width 100vw
      height 37.86vw
      .item-image
        width 100%
        height 100%
        display block
    .item-info
      padding .25rem
      .item-desc
        margin-top .15rem
        color $CPATextColor
        font-size .15rem
</style>
