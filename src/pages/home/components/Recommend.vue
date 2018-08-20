<template>
  <div class="recommend">
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of itemList" :key="item.id">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" alt="#" class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title" v-text="item.title"></p>
          <p class="item-stars"><span class="stars iconfont">&#xe805;&#xe805;&#xe805;&#xe805;&#xe805;</span>&nbsp;&nbsp;&nbsp;<span class="comment" v-text="item.comment"></span></p>
          <p class="item-pri-add"><span class="pri">¥<em class="pri-num" v-text="item.pri"></em></span><span class="add" v-text="item.add"></span></p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      itemList: JSON.parse('[{"title":"东部华侨城大侠谷","comment":"4980条评论","pri":"85","add":"东部华侨...","id":"0001","imgUrl":"http://img1.qunarzz.com/sight/p0/1502/15/15ca1d0eab6bf46c.water.jpg_200x200_50ca7bb1.jpg"},{"title":"深圳欢乐谷","comment":"20981条评论","pri":"154.5","add":"南山区","id":"0002","imgUrl":"http://img1.qunarzz.com/sight/p0/1807/99/992c99c98928c509a3.water.jpg_200x200_fc4df6ea.jpg"},{"title":"世界之窗","comment":"27462条评论","pri":"79","add":"华侨城","id":"0003","imgUrl":"http://img1.qunarzz.com/sight/p0/1805/6f/6f885ea8b30c67bca3.water.jpg_200x200_21b03a9c.jpg"},{"title":"深圳小梅沙海洋世界","comment":"6070条评论","pri":"155","add":"小梅沙","id":"0004","imgUrl":"http://img1.qunarzz.com/sight/p0/1507/64/34362835b4a219af8b36803d31a6380f.water.jpg_200x200_bc5c0452.jpg"},{"title":"东部华侨城","comment":"16247条评论","pri":"50","add":"盐田区","id":"0005","imgUrl":"http://img1.qunarzz.com/sight/p0/1808/14/14ff6b51a7a1f2f7a3.water.jpg_200x200_978f0705.jpg"},{"title":"深圳野生动物园","comment":"12911条评论","pri":"19.8","add":"南山区","id":"0006","imgUrl":"http://img1.qunarzz.com/sight/p0/1508/2e/d9363ce50a88c8c5ff5a138c67687cd4.water.jpg_200x200_1c15c8f5.jpg"},{"title":"海洋奇梦馆","comment":"3388条评论","pri":"55","add":"欢乐海岸","id":"0007","imgUrl":"http://img1.qunarzz.com/sight/p0/201307/18/f25ac054eec3804dc8d65eac.jpg_200x200_a008b6ca.jpg"},{"title":"地王大厦","comment":"3072条评论","pri":"160","add":"罗湖区","id":"0008","imgUrl":"http://img1.qunarzz.com/sight/p0/201405/30/a9edfcb4fe0e119da480d30d22ade127.jpg_200x200_6af441cf.jpg"},{"title":"东部华侨城茶溪谷","comment":"4883条评论","pri":"89","add":"东部华侨...","id":"0009","imgUrl":"http://img1.qunarzz.com/sight/p0/1507/e4/a3f526c57e0115798af52929d294ddd6.water.jpg_200x200_c6bc3621.jpg"},{"title":"观澜山水田园水上乐园","comment":"688条评论","pri":"59.5","add":"观澜山水...","id":"00010","imgUrl":"http://img1.qunarzz.com/sight/p0/1805/ab/ab4fccbc392da994a3.water.jpg_200x200_0b4dfdea.jpg"},{"title":"东门","comment":"507条评论","pri":"154.5","add":"罗湖区","id":"00011","imgUrl":"http://img1.qunarzz.com/sight/p0/201403/11/c69b992ac22fcf227a04a89bbe597be6.jpg_200x200_9ae54fbd.jpg"},{"title":"阿尔卑斯山滑雪场","comment":"889条评论","pri":"79","add":"世界之窗","id":"00012","imgUrl":"http://img1.qunarzz.com/sight/p0/201303/04/3dc3e87356026a63c8d65eac.jpg_200x200_1de448b6.jpg"},{"title":"青青世界","comment":"2213条评论","pri":"85","add":"南山区","id":"00013","imgUrl":"http://img1.qunarzz.com/sight/p0/1412/6f/5d803c45af314b68f4652362fca42d11.water.jpg_200x200_42a7956b.jpg"},{"title":"欢乐海岸","comment":"3126条评论","pri":"155","add":"南山区","id":"00014","imgUrl":"http://img1.qunarzz.com/sight/p0/1805/5a/5a86bea723aca30ca3.water.png_200x200_541e78d2.png"},{"title":"流星谷欢乐世界","comment":"240条评论","pri":"89","add":"宝安区","id":"00015","imgUrl":"http://img1.qunarzz.com/sight/p0/1701/39/39982ad22a210ecca3.water.jpg_200x200_950c135d.jpg"},{"title":"金色海岸游艇","comment":"707条评论","pri":"19.8","add":"盐田区","id":"00016","imgUrl":"http://img1.qunarzz.com/sight/p0/1504/25/2567e9dc989e2eb6.water.jpg_200x200_caea32c8.jpg"},{"title":"东部华侨城水公园","comment":"41条评论","pri":"50","add":"东部华侨...","id":"00017","imgUrl":"http://img1.qunarzz.com/sight/p0/1707/bf/bfd58bb85da6dde3a3.water.jpg_200x200_54a9d1b6.jpg"},{"title":"华侨城","comment":"19193条评论","pri":"60","add":"南山区","id":"00018","imgUrl":"http://img1.qunarzz.com/sight/p0/1608/6d/6d3c093626e8ceaca3.water.jpg_200x200_ffa505fa.jpg"},{"title":"深圳深蓝秘境欢乐水秀","comment":"1393条评论","pri":"89","add":"欢乐海岸","id":"00019","imgUrl":"http://img1.qunarzz.com/sight/p0/201301/16/6a16218e8b39640093835fbb.jpg_200x200_214adc38.jpg"},{"title":"求水山公园游乐场","comment":"94条评论","pri":"97","add":"龙岗区","id":"00020","imgUrl":"http://img1.qunarzz.com/sight/p0/1506/88/8838a1c945981a8d.water.jpg_200x200_da878466.jpg"},{"title":"深圳玛雅水公园","comment":"619条评论","pri":"69.1","add":"深圳欢乐...","id":"00021","imgUrl":"http://img1.qunarzz.com/sight/p0/1805/17/176c2114bb8ae255a3.water.png_200x200_a1b6cfdf.png"},{"title":"欢乐海岸SOLOpro拓极水运动","comment":"102条评论","pri":"45","add":"欢乐海岸","id":"00022","imgUrl":"http://img1.qunarzz.com/sight/p0/1805/5a/5a86bea723aca30ca3.water.png_200x200_541e78d2.png"},{"title":"观澜湖生态体育园","comment":"442条评论","pri":"40","add":"宝安区","id":"00023","imgUrl":"http://img1.qunarzz.com/sight/p0/1612/7c/7ccdbb8781903007a3.water.jpg_200x200_44940cbd.jpg"},{"title":"深圳观澜九龙山花仙谷","comment":"1014条评论","pri":"45.9","add":"深圳","id":"00024","imgUrl":"http://img1.qunarzz.com/sight/p0/1608/fc/fcd0d1ca50a378b5a3.img.jpg_200x200_70d244ae.jpg"},{"title":"观澜山水田园旅游文化园","comment":"1188条评论","pri":"38.8","add":"龙华新区","id":"00025","imgUrl":"http://img1.qunarzz.com/sight/p0/201405/30/258359fbfa587e26a207cee0ffe39211.jpg_200x200_26567159.jpg"}]')
    }
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
