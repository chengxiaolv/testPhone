<template>
  <div class="CommodityDetailsContent">
    <div class="CollageIintroduction">
      <div class="one">
        <img src="../../../static/images/top-icon-kaituan@2x.png" alt="">
        <p>1.择商品开团/拼团</p>
      </div>
      <div class="Braces">></div>
      <div class="tow">
        <img src="../../../static/images/top-icon-cantuan@2x.png" alt="">
        <p>1.择商品开团/拼团</p>
      </div>
      <div class="Braces">></div>
      <div class="three">
        <img src="../../../static/images/top-icon-chengtuan@2x.png" alt="">
        <p>1.择商品开团/拼团</p>
      </div>
    </div>
    <div class="Price">
      <div class="Price_left">
        <img src="../../../static/images/img-2@2x.png" alt="">
      </div>
      <div class="Price_right">
        <p>乙烯利芒果，4人团5斤仅需39元...</p>
        <p>
          <span>原价</span>
          <span>￥59</span>
          <span>起/件</span>
        </p>
        <p>
          <span>原价</span>
          <span>￥59</span>
          <span>起/件</span>
        </p>
      </div>
    </div>
    <div class="line"></div>
    <div class="Describe">
      拼团活动已结束，不能参加拼团
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
    <div class="GroupRecords">
      <div class="GroupRecordsTitle">
        参团记录
      </div>
      <ul>
        <li class="clearfix">
          <img src="../../../static/images/img-2@2x.png" alt="" class="fl">
          <div class="fl">
            <p>智铺子国兴大厦店</p>
            <p>桃园常兴路XXXXXXXX</p>
          </div>
        </li>
      </ul>
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
    padding-top:pxToRem(36);
    .CollageIintroduction{
      display: flex;
      text-align: center;
      padding-top: pxToRem(30);
      font-size: pxToRem(24);
      color: #666;
      padding: 0 pxToRem(24);
      padding-bottom: pxToRem(20);
      border-bottom: solid pxToRem(2) #eee;
      img{
        width: pxToRem(48);
        height: pxToRem(48);
        margin-bottom: pxToRem(20);
      }
      .one{
        flex: 1;
      }
      .tow{
        flex: 1;
      }
      .three{
        flex: 1;
      }
      .Braces{
        height: pxToRem(70);
        line-height: pxToRem(70);
        color: #999;
        margin: 0 pxToRem(10);
        font-size: pxToRem(30);
      }
    }
    .Price{
      padding: pxToRem(30) pxToRem(36) pxToRem(35) pxToRem(36);
      display: flex;
      .Price_left{
        img{
          width: pxToRem(300);
          height: pxToRem(300);
          margin-right: pxToRem(20);
        }
      }
      .Price_right{
        p:first-child{
          font-size: pxToRem(30);
          color: #333;
          line-height: pxToRem(42);
          margin-bottom: pxToRem(35);
        }
        p:nth-child(2){
          position: relative;
          height: pxToRem(68);
          width: pxToRem(358);
          border: solid pxToRem(2) #999;
          border-radius: 8px;
          text-align: center;
          line-height: pxToRem(78);
          margin-bottom: pxToRem(35);
          span:first-child{
            position: absolute;
            top: pxToRem(-40);
            font-size: pxToRem(24);
            color: #999;
            width: pxToRem(100);
            height: pxToRem(40);
            background-color: #fff;
            left: 50%;
            margin-left: pxToRem(-40)
          }
          span:nth-child(2){
            font-size: pxToRem(24);
            color: #666;
          }
          span:last-child{
            font-size: pxToRem(22);
            color: #999;
          }
        }
        p:nth-child(3){
          position: relative;
          height: pxToRem(68);
          width: pxToRem(358);
          border: solid pxToRem(2) #f87a7c;
          border-radius: 8px;
          text-align: center;
          line-height: pxToRem(78);
          span:first-child{
            position: absolute;
            top: pxToRem(-10);
            font-size: pxToRem(24);
            color: #333;
            width: pxToRem(100);
            height: pxToRem(20);
            line-height: pxToRem(20);
            background-color: #fff;
            left: 50%;
            margin-left: pxToRem(-40);
          }
          span:nth-child(2){
            font-size: pxToRem(24);
            color: #f87a7c;
          }
          span:last-child{
            font-size: pxToRem(22);
            color: #999;
          }
        }
      }
    }
    .line{
      height: pxToRem(20);
      background-color: #f5f5f5;
    }
    .Describe{
      height: pxToRem(183);
      line-height: pxToRem(183);
      color: #333;
      font-size: pxToRem(30);
      text-align: center;
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
    .GroupRecords{
      padding: pxToRem(30) 0 0 pxToRem(36);
      .GroupRecordsTitle{}
      ul{
        li{
          img{
            width: pxToRem(100);
            height: pxToRem(100);
            margin-right: pxToRem(20);
          }
        }
      }
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
