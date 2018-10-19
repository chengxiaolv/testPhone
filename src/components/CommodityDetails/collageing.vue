<template>
  <div class="collageingContent">
    <ul>
      <li>
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
          <span>4人团</span>
          <span>￥99</span>
          <span>单买价:￥159</span>
        </div>
      </li>
    </ul>
    <div class="line"></div>
  
    <div class="GroupRecords">
      <ul>
        <li class="clearfix">
          <img src="../../../static/images/img-2@2x.png" alt="" class="fl">
          <div class="fl">
            <p>程晓绿</p>
            <p>
              还差<span style="color:#f87a7c">1</span>人成团，剩余<span style="color:#f87a7c">12:11:12</span>结束
            </p>
          </div>
          <span class="OpenARegiment" @click="JoinTheGroup">去参团</span>
        </li>
      </ul>
      <p class="more" @click="showMore">查看更多 >></p>
    </div>
    <div class="line"></div>

    <div class="DistributionMode" @click="DistributionMode">
      <span class="fl">配送方式：</span>
      <span class="fl">{{DistributionModeTitle}}</span>
      <span class="fr">></span>
    </div>
    <div class="address clearfix" @click="showBusinessMoreCollage">
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

    <div class="tab">
      <span @click="tabBtn('AllCollages')" :class="{activeTab:activeTab == 'AllCollages' ? true : false}">￥59 单买</span>
      <span @click="tabBtn('myCollages')" :class="{activeTab:activeTab == 'AllCollages' ? false : true}">￥39 开团</span>
    </div>

    <mt-actionsheet
      :actions="actions"
      cancelText = ''
      v-model="sheetVisible">
    </mt-actionsheet>

    <mt-popup
      v-model="popupVisible"
      class="tipsList"
      popup-transition="popup-fade">
      <div class="AnOpenListTips">
        正在开团
        <span class="close" @click="closeBusinessMoreCollage">x</span>
      </div>
      <ul class="AnOpenList clearfix">
        <li class="clearfix">
          <img src="../../../static/images/img-2@2x.png" alt="" class="fl">
          <div class="fl">
            <p>程晓绿&nbsp;还差<span style="color:#f87a7c">1</span>人成团</p>
            <p>
             剩余<span style="color:#f87a7c">&nbsp;12:11:12&nbsp;</span>结束
            </p>
          </div>
          <span class="OpenARegiment" @click="JoinTheGroup">去参团</span>
        </li>
      </ul>
    </mt-popup>
  </div>
</template>

<script>
  import { Toast, Popup } from 'mint-ui';
  export default {
    data(){
      return{
        activeTab: 'myCollages',
        sheetVisible: false,
        isShow: false,
        actions:[],
        DistributionModeTitle: '自提', //选择派送方式
        popupVisible: false
      }
    },
    created(){
      var self = this;
      this.actions = [
        {
          name: '配送方式'
        },
        {
          name: '自提',
          method(){
            self.DistributionModeTitle = '自提';
          }
        },
        {
          name: '本地派送',
          method(){
            self.DistributionModeTitle = '本地派送';
          }
        }
      ]
    },
    methods:{
       tabBtn(val){ //切换tab
        this.activeTab = val;
      },
      DistributionMode(){ //选择配送方式
        this.sheetVisible = true;
      },
      showMore(){ //加载更多  该商品拼团
        let instance = Toast('加载更多拼团');
        setTimeout(() => {
          instance.close();
        }, 1000);
      },
      showBusinessMoreCollage(){ // 展示商家更多拼团
        this.popupVisible = true;
      },
      closeBusinessMoreCollage(){ // 隐藏商家更多拼团
        this.popupVisible = false;
      },
      JoinTheGroup(){ //去参团
      console.log(123);
        this.$router.push('/JoinTheGroup/'+ 3 + '_' + 0); //跳转结束商品详情页面
      }
    }
  }
</script>

<style scoped lang="scss">
  @import '../../../static/scss.scss'; //导入外部scss文件 
  .collageingContent{
    padding-bottom: pxToRem(150); 
  }
  ul{
    font-family: PingFang-SC-Medium;
    padding-bottom: pxToRem(43);
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
        padding:0 pxToRem(36) 0 pxToRem(36);
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
        .stateColor{
          color: #999999 !important;
          border: solid pxToRem(2) #999999 !important;
        }
      }
    }
  }
  .line{
    height: pxToRem(20);
    background-color: #f5f5f5;
  }
  .GroupRecords{
    padding: 0 0 0 pxToRem(36);
    ul{
      li{
        padding: pxToRem(30) 0 pxToRem(30) 0;
        border-bottom: pxToRem(2) solid #eee;
        position: relative;
        .OpenARegiment{
          position: absolute;
          right: pxToRem(36);
          top: pxToRem(42);
          height: pxToRem(42);
          line-height: pxToRem(42);
          width: pxToRem(98);
          text-align: center;
          color:#fff;
          background-color: #f87a7c;
          border-radius: pxToRem(4);
        }
        img{
          width: pxToRem(100);
          height: pxToRem(100);
          margin-right: pxToRem(20);
          border-radius: 50%;
        }
        .fl{
          p{
            height: pxToRem(40);
            line-height: pxToRem(40);
          }
          p:first-child{
            margin-top: pxToRem(10);
            color: #333;
            font-size: pxToRem(28);
          }
          p:last-child{
            color: #999;
            font-size: pxToRem(24);
          }
        }
        &:last-child{
          border: none;
        }
      }
    }
    .more{
      color: #999;
      font-size: pxToRem(24);
      text-align: center; 
      margin-bottom: pxToRem(50);
    }
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
  .tab{
    position: fixed;
    z-index: 2;
    bottom: 0;
    width: 100%;
    height: pxToRem(98);
    line-height: pxToRem(98);
    display: flex;
    border-top: solid pxToRem(2) #eeeeee;
    background-color: #fff;
    span{
      flex:1;
      height: 100%;
      text-align: center;
      font-size: pxToRem(32);
      color: #666666;
    }
    .activeTab{
      background-color: #f87a7c;
      color: #fff;
    }
  }
  .tipsList{
    width: pxToRem(654);
    height: pxToRem(810);
    border-radius: pxToRem(14);
    overflow: auto;
    .AnOpenListTips{
      height: pxToRem(94);
      line-height: pxToRem(94);
      color: #333;
      font-size: pxToRem(36);
      text-align: center;
      border-bottom: pxToRem(2) solid #eee;
      position: relative;
      .close{
        position: absolute;
        font-size: pxToRem(40);
        right: pxToRem(36);
      }
    }
    .AnOpenList{
      li{
        padding: pxToRem(30) 0 pxToRem(30) pxToRem(30);
        border-bottom: pxToRem(2) solid #eee;
        position: relative;
        .OpenARegiment{
          position: absolute;
          right: pxToRem(36);
          top: pxToRem(42);
          height: pxToRem(42);
          line-height: pxToRem(42);
          width: pxToRem(98);
          text-align: center;
          color:#fff;
          background-color: #f87a7c;
          border-radius: pxToRem(4);
        }
        img{
          width: pxToRem(100);
          height: pxToRem(100);
          margin-right: pxToRem(20);
          border-radius: 50%;
        }
        .fl{
          p{
            height: pxToRem(40);
            line-height: pxToRem(40);
          }
          p:first-child{
            margin-top: pxToRem(10);
            color: #333;
            font-size: pxToRem(28);
          }
          p:last-child{
            color: #999;
            font-size: pxToRem(24);
          }
        }
        &:last-child{
          border: none;
        }
      }
    }
  }
</style>

 