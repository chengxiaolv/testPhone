<template>
  <div>
    <ul>
      <li v-for="(item,index) in data" :key="index" @click="text(item)">
        <img :src="item.img" alt="" srcset="">
        <p class="timeTips" v-if="item.status == 0 ? true : false">
          <span class="fl">拼团</span>
          <span class="fr">
            <span>剩余时间：</span>
            <span>07天06时22分30秒</span>
          </span>
        </p>
        <div class="statusTips" v-if="item.status == 0 ? false : true">
          <span v-if="item.status == 1 ? true : false">已结束</span>
          <span v-if="item.status == 2 ? true : false">已售罄</span>
          <span v-if="item.status == 3 ? true : false">未开始</span>
        </div>
        <div class="CommodityDetailS">{{item.CommodityDescription}}</div>
        <div class="CommodityState">
          <span>{{item.people}}人团</span>
          <span>￥{{item.PresentPrice}}</span>
          <span>单买价:￥{{item.OriginalPrice}}</span>
          <span v-if="item.status == 0 ? true : false">去开团</span>
          <span class="stateColor" v-if="item.status == 0 ? false : true">去开团</span>
        </div>
      </li>


      <!-- <li @click="collageing">
        <img src="../../../static/images/img-1@2x.png" alt="" srcset="">
        <p class="timeTips">
          <span class="fl">拼团</span>
          <span class="fr">
            <span>剩余时间：</span>
            <span>07天06时22分30秒</span>
          </span>
        </p>
        <div class="CommodityDetailS">中华红荔枝，5人团10斤仅需99元</div>
        <div class="CommodityState">
          <span>5人团</span>
          <span>￥99</span>
          <span>单买价:￥159</span>
          <span>去开团</span>
        </div>
      </li>
      <li @click="FinishedCcollage">
        <img src="../../../static/images/img-2@2x.png" alt="" srcset="">
        <div class="CommodityDetailS">乙烯利芒果，4人团5斤仅需39</div>
        <div class="statusTips">
          <span>已结束</span>
        </div>
        <div class="CommodityState">
          <span>4人团</span>
          <span>￥99</span>
          <span>单买价:￥159</span>
          <span class="stateColor">去开团</span>
        </div>
      </li>
      <li @click="alreadyBought">
        <img src="../../../static/images/img-2@2x.png" alt="" srcset="">
        <div class="CommodityDetailS">乙烯利芒果，4人团5斤仅需39</div>
        <div class="statusTips">
          <span>已售罄</span>
        </div>
        <div class="CommodityState">
          <span>4人团</span>
          <span>￥99</span>
          <span>单买价:￥159</span>
          <span class="stateColor">去开团</span>
        </div>
      </li>
      <li @click="NotBeginning">
        <img src="../../../static/images/img-2@2x.png" alt="" srcset="">
        <div class="CommodityDetailS">乙烯利芒果，4人团5斤仅需39</div>
        <div class="statusTips">
          <span>未开始</span>
        </div>
        <div class="CommodityState">
          <span>4人团</span>
          <span>￥99</span>
          <span>单买价:￥159</span>
          <span class="stateColor">未开始</span>
        </div>
      </li> -->

      <!-- <li @click="collageing">
        <img src="../../../static/images/img-1@2x.png" alt="" srcset="">
        <p class="timeTips">
          <span class="fl">拼团</span>
          <span class="fr">
            <span>剩余时间：</span>
            <span>07天06时22分30秒</span>
          </span>
        </p>
        <div class="CommodityDetailS">中华红荔枝，5人团10斤仅需99元</div>
        <div class="CommodityState">
          <span>5人团</span>
          <span>￥99</span>
          <span>单买价:￥159</span>
          <span>去开团</span>
        </div>
      </li>
      <li @click="FinishedCcollage">
        <img src="../../../static/images/img-2@2x.png" alt="" srcset="">
        <div class="CommodityDetailS">乙烯利芒果，4人团5斤仅需39</div>
        <div class="statusTips">
          <span>已结束</span>
        </div>
        <div class="CommodityState">
          <span>4人团</span>
          <span>￥99</span>
          <span>单买价:￥159</span>
          <span class="stateColor">去开团</span>
        </div>
      </li>
      <li @click="alreadyBought">
        <img src="../../../static/images/img-2@2x.png" alt="" srcset="">
        <div class="CommodityDetailS">乙烯利芒果，4人团5斤仅需39</div>
        <div class="statusTips">
          <span>已售罄</span>
        </div>
        <div class="CommodityState">
          <span>4人团</span>
          <span>￥99</span>
          <span>单买价:￥159</span>
          <span class="stateColor">去开团</span>
        </div>
      </li>
      <li @click="NotBeginning">
        <img src="../../../static/images/img-2@2x.png" alt="" srcset="">
        <div class="CommodityDetailS">乙烯利芒果，4人团5斤仅需39</div>
        <div class="statusTips">
          <span>未开始</span>
        </div>
        <div class="CommodityState">
          <span>4人团</span>
          <span>￥99</span>
          <span>单买价:￥159</span>
          <span class="stateColor">未开始</span>
        </div>
      </li> -->
    </ul>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        data: []
      }
    },
    methods:{
      init(){  //初始化渲染项目
        this.https.post("/allCollage")
        .then((res)=>{
          console.log(res)
          this.data = res.articles;
          console.log(this.data)
        })
        .catch((res)=>{
          console.log(res)
        })
      },
      // NotBeginning(){ //未开始商品详情
      //   this.$router.push('/no_beginning_collage/'+ 3 + '_' + 0); //跳转未开始商品详情页面
      // },
      // FinishedCcollage(){ //结束商品详情
      //   this.$router.push('/Finished_collage/'+ 3 + '_' + 0); //跳转结束商品详情页面
      // },
      // alreadyBought(){ //已售罄商品详情
      //   this.$router.push('/already_bought/'+ 3 + '_' + 0); //跳转已售罄商品详情页面
      // },
      // collageing(){ //正在拼团商品详情
      //   this.$router.push('/collageing/'+ 3 + '_' + 0); //跳转已售罄商品详情页面
      // },

      text(item){
        if(item.status == 0){
          this.$router.push('/collageing/'+ item.id); //跳转未开始商品详情页面
        }else if(item.status == 1){
          this.$router.push('/Finished_collage/'+ item.id); //跳转结束商品详情页面
        }else if(item.status == 2){
          this.$router.push('/already_bought/'+ item.id); //跳转已售罄商品详情页面
        }else if(item.status == 3){
          this.$router.push('/no_beginning_collage/'+ item.id); //跳转已售罄商品详情页面
        }
      }
    },
    created(){
      this.init();
    }
  }
</script>
<style scoped lang="scss">
  @import '../../../static/scss.scss'; //导入外部scss文件 
  ul{
    font-family: PingFang-SC-Medium;
    padding-bottom: pxToRem(98);
    li{
      font-size: pxToRem(22);
      position: relative;
      .statusTips{
        width: pxToRem(180);
        height: pxToRem(180);
        line-height: pxToRem(180);
        text-align: center;
        font-size: pxToRem(36);
        color: #ffffff;
        background-color: rgba($color: #000000, $alpha: 0.45);
        border-radius: 50%;
        position: absolute;
        top: pxToRem(135);
        left: 50%;
        margin-left: pxToRem(-90);
      }
      img{
        width: 100%;
        height: pxToRem(450);
      }
      .timeTips{
        position: absolute;
        top: pxToRem(370);
        height: pxToRem(80);
        line-height: pxToRem(80);
        background-color: #f87a7c;
        color: #ffffff;
        width: 100%;
        .fl{
          margin-left: pxToRem(36);
          font-size: pxToRem(30);
        }
        .fr{
          margin-right: pxToRem(20); 
          font-size: pxToRem(24);
        }
      }
      .CommodityDetailS{
        font-size: pxToRem(30);
        color: #333333;
        padding: pxToRem(30) 0 pxToRem(20) pxToRem(36);
      }
      .CommodityState{
        padding:0 pxToRem(36) pxToRem(40) pxToRem(36);
        span:first-child{
          display: inline-block;
          text-align: center;
          width: pxToRem(68);
          height: pxToRem(30);
          line-height: pxToRem(30);
          background-color: #f87a7c;
          color: #fff;
          font-size: pxToRem(20);
          margin-right: pxToRem(10);
        }
        span:nth-child(2){
          font-size: pxToRem(24);
          color:#f87a7c;
        }
        span:nth-child(3){
          font-size: pxToRem(24);
          color:#666666;
          margin-left: pxToRem(20);
        }
        span:nth-child(4){
          display: inline-block;
          width: pxToRem(98);
          height: pxToRem(42);
          line-height: pxToRem(42);
          font-size: pxToRem(24);
          color:#f87a7c;
          border: solid pxToRem(2) #f87a7c;
          text-align: center;
          float: right;
          margin-top: pxToRem(-10);
        }
        .stateColor{
          color: #999999 !important;
          border: solid pxToRem(2) #999999 !important;
        }
      }
    }
  }
</style>

