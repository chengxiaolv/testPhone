<template>
  <div class="CommodityDetailsContent">
    <img src="../../../static/images/img-2@2x.png" alt="" srcset="">
    <div class="RemainingTime">
      <span class="fl">拼团</span>
      <span class="fr">07天06时54分30秒</span>
      <span class="fr">剩余时间：</span>
    </div>
    <div class="goodsInfo">
      <p>乙烯利芒果，4人团5斤仅需39</p>
      <p>
        <span class="GroupPurchase">4人团</span>
        <span class="PresentPrice">
          <span>￥</span>
          <span>39</span>
        </span>
        <span>单买价:</span>
        <span>￥59</span>
      </p>
    </div>
    <div class="line"></div>
    <div class="DistributionMode">
      <span class="fl">配送方式：</span>
      <span class="fl">自提</span>
      <span class="fr">></span>
    </div>
    <div class="address clearfix">
      <img src="../../../static/images/img-2@2x.png" alt="" class="fl">
      <div class="addressLeft fl">
        <p>智铺子国兴大厦店</p>
        <p>桃园常兴路XXXXXXXX</p>
      </div>
      <div class="addressRight fr">
        >
      </div>
    </div>
    <div class="line"></div>
    <div class="CommodityDetails">
      <span>商品详情</span>
    </div>
    <div class="status">
      活动未开始
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    },
    methods:{

    },
    created(){

    },
    watch:{

    },
    components:{

    }
  }
</script>

<style scoped lang="scss">
  @import '../../../static/scss.scss'; //导入外部scss文件 
  .CommodityDetailsContent{
    font-family: PingFang-SC-Medium;
    img{
      width: 100%;
      display: block;
      height: pxToRem(450);
    }
    .RemainingTime{
      height: pxToRem(80);
      line-height: pxToRem(80);
      padding-left: pxToRem(36);
      padding-right: pxToRem(20);
      color: #ffffff;
      background-color: #f87a7c;
      .fl{
        font-size: pxToRem(30);
      }
      .fr{
        font-size: pxToRem(24);
      }
    }
    .goodsInfo{
      padding-top: pxToRem(30);
      padding-left: pxToRem(36);
      padding-bottom: pxToRem(30);
      p:first-child{
        font-size: pxToRem(30);
        color: #333;
        margin-bottom: pxToRem(20);
      }
      p:last-child{
        .GroupPurchase{
          display: inline-block;
          text-align: center;
          width: pxToRem(68);
          height: pxToRem(30);
          line-height: pxToRem(30);
          background-color: #f87a7c;
          border-radius: pxToRem(4);
          color: #fff;
          font-size: pxToRem(20);
         margin-right: pxToRem(10);
        }
        .PresentPrice{
          color: #f87a7c;
          margin-right: pxToRem(20);
          span:first-child{
            font-size: pxToRem(24);
          }
          span:last-child{
            font-size: pxToRem(36);
          }
        }
        span:nth-child(3){
          font-size: pxToRem(24);
          color: #666;
        }
        span:nth-child(4){
          font-size: pxToRem(24);
          color: #666;
        }
      }
    }
    .line{
      height: pxToRem(20);
      background-color: #f5f5f5;
    }
    .DistributionMode{
      height: pxToRem(86);
      line-height: pxToRem(86);
      font-size: pxToRem(28);
      color: #333;
      padding-left: pxToRem(36);
      padding-right: pxToRem(36);
      border-bottom: pxToRem(2) solid #eee;
      span:last-child{
        color:#999999;
        font-size: pxToRem(36);
      }
    }
    .address{
      padding: pxToRem(22) pxToRem(36) pxToRem(22) pxToRem(36);
      // display: flex;
      img{
        width: pxToRem(100);
        height: pxToRem(100);
        margin-right: pxToRem(20);
      }
      .addressLeft{
        line-height: pxToRem(50);
      }
      .addressRight{
        color:#999999;
        font-size: pxToRem(36);
        line-height: pxToRem(100);
        align-self: stretch ;
      }
    }
    .CommodityDetails{
      padding: pxToRem(30) pxToRem(36) pxToRem(36) pxToRem(36);
      font-size: pxTorem(28);
      color: #333;
    }
    .status{
      height: pxToRem(98);
      line-height: pxToRem(98);
      background-color: #bababa;
      color: #fff;
      text-align: center;
      position: fixed;
      bottom: 0;
      font-size: pxToRem(32);
      width: 100%;
    }
  }
</style>
