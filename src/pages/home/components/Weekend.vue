<template>
  <div class="weekend">
    <div class="title">周末去哪儿</div>
    <ul>
      <li v-for="item of itemList" :key="item.id">
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
  data () {
    return {
      itemList: JSON.parse('[{"id":"0001","title":"深圳必游TOP10","imgUrl":"http://img1.qunarzz.com/sight/source/1505/fa/ca65fde9677de2.jpg_r_640x214_4500e3ff.jpg","desc":"来到深圳，你需要来这里签到"},{"id":"0002","title":"欢乐长隆","imgUrl":"http://img1.qunarzz.com/sight/source/1602/88/bf120edeaea383.jpg_r_640x214_f8591f7b.jpg","desc":"世界欢乐汇聚长隆"},{"id":"0003","title":"当地人游深圳","imgUrl":"http://img1.qunarzz.com/sight/source/1507/d9/2ddc7652fdba16.jpg_r_640x214_5e62f1a3.jpg","desc":"当地人带你发现不一样的深圳"},{"id":"0004","title":"情侣好去处","imgUrl":"http://img1.qunarzz.com/sight/source/1505/eb/e4b181a6957c36.jpg_r_640x214_4abbdbc0.jpg","desc":"手牵手，一起走到老"},{"id":"0005","title":"周末亲子游","imgUrl":"http://img1.qunarzz.com/sight/source/1505/69/e899202f7abddf.jpg_r_640x214_81b6b528.jpg","desc":"这个周末就开启美妙的亲子时光"}]')
    }
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
