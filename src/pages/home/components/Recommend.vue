<template>
  <div class="recommend">
    <div class="title">热销推荐</div>
    <ul>
      <router-link tag="li" class="item border-bottom" v-for="item of list" :key="item.id" :to="'/detail?id=' + item.id">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" alt="#" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title" v-text="item.title"></p>
          <p class="item-stars"><span class="stars iconfont">&#xe805;&#xe805;&#xe805;&#xe805;&#xe805;</span>&nbsp;&nbsp;&nbsp;<span class="comment" v-text="item.comment"></span></p>
          <p class="item-pri-add"><span class="pri">¥<em class="pri-num" v-text="item.pri"></em></span><span class="add" v-text="item.add"></span></p>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~@/assets/styles/variables.styl';

  .recommend
    .title
      margin-top .2rem
      line-height .8rem
      background-color #EEE
      text-indent .2rem
    .item
      display flex
      justify-content space-between
      align-items center
      height 2rem
      padding .15rem
      overflow hidden
      .item-img-wrapper
        width 1.85rem
        height 1.85rem
        img
          width 100%
          height 100%
          display block
      .item-info
        height 100%
        padding .2rem
        box-sizing border-box
        flex-grow 1
        display flex
        flex-direction column
        justify-content space-around
        .item-title
          font-size 0.33rem
        .item-stars
          font-size .25rem
          .stars
            font-size .25rem
            color rgb(255, 180, 54)
          .comment
            color $CPATextColor
        .item-pri-add
          font-size .26rem
          display flex
          color $CPATextColor
          justify-content space-between
          .pri
            color rgb(255, 131, 0)
            .pri-num
              font-size .34rem
            &::after
              display inline
              content '起'
              color $CPATextColor
</style>
