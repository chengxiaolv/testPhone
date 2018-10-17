<template>
  <div>
    <ul>
      <li>
        <p class="orderName">
          <span>大米虾</span>
          <span class="fr">拼团中</span>
        </p>
        <div class="orderContent">
          <div class="orderContentLeft">
            <img src="../../../static/images/img-2@2x.png" alt="" srcset="">
          </div>
          <div class="orderContentRight">
            <p>乙烯利芒果，4人团5斤仅需39</p>
            <p>单买价:<span>￥59</span>&nbsp;四人团:<span>￥39</span></p>
          </div>
        </div>
        <div class="orderMoney">
          <span class="fr">￥39</span>
          <span class="fr">实付：</span>
        </div>
        <div class="orderBtn clearfix">
          <span class="fr">取消订单</span>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <p class="orderName">
          <span>大米虾</span>
          <span class="fr">拼团失败，已退款</span>
        </p>
        <div class="orderContent">
          <div class="orderContentLeft">
            <img src="../../../static/images/img-2@2x.png" alt="" srcset="">
          </div>
          <div class="orderContentRight">
            <p>乙烯利芒果，4人团5斤仅需39</p>
            <p>单买价:<span>￥59</span>&nbsp;四人团:<span>￥39</span></p>
          </div>
        </div>
        <div class="orderMoney">
          <span class="fr">￥39</span>
          <span class="fr">实付：</span>
        </div>
        <div class="orderBtn clearfix">
          <span class="fr">删除</span>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <p class="orderName">
          <span>大米虾</span>
          <span class="fr">拼团失败，退款中</span>
        </p>
        <div class="orderContent">
          <div class="orderContentLeft">
            <img src="../../../static/images/img-2@2x.png" alt="" srcset="">
          </div>
          <div class="orderContentRight">
            <p>乙烯利芒果，4人团5斤仅需39</p>
            <p>单买价:<span>￥59</span>&nbsp;四人团:<span>￥39</span></p>
          </div>
        </div>
        <div class="orderMoney">
          <span class="fr">￥39</span>
          <span class="fr">实付：</span>
        </div>
        <!-- <div class="orderBtn clearfix">
          <span class="fr">删除</span>
        </div> -->
        <div class="line"></div>
      </li>
      <li>
        <p class="orderName">
          <span>大米虾</span>
          <span class="fr">拼团成功</span>
        </p>
        <div class="orderContent">
          <div class="orderContentLeft">
            <img src="../../../static/images/img-2@2x.png" alt="" srcset="">
          </div>
          <div class="orderContentRight">
            <p>乙烯利芒果，4人团5斤仅需39</p>
            <p>单买价:<span>￥59</span>&nbsp;四人团:<span>￥39</span></p>
          </div>
        </div>
        <div class="orderMoney">
          <span class="fr">￥39</span>
          <span class="fr">实付：</span>
        </div>
        <div class="orderBtn clearfix">
          <span class="fr">查看订单详情</span>
        </div>
        <div class="line"></div>
      </li>
      <li>
        <p class="orderName">
          <span>大米虾</span>
          <span class="fr">订单已取消</span>
        </p>
        <div class="orderContent">
          <div class="orderContentLeft">
            <img src="../../../static/images/img-2@2x.png" alt="" srcset="">
          </div>
          <div class="orderContentRight">
            <p>乙烯利芒果，4人团5斤仅需39</p>
            <p>单买价:<span>￥59</span>&nbsp;四人团:<span>￥39</span></p>
          </div>
        </div>
        <div class="orderMoney">
          <span class="fr">￥39</span>
          <span class="fr">实付：</span>
        </div>
        <div class="orderBtn clearfix">
          <span class="fr">删除</span>
        </div>
        <div class="line"></div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        
      }
    }
  }
</script>
<style scoped lang="scss">
  @import '../../../static/scss.scss'; //导入外部scss文件 
  ul{
    padding: 0px pxToRem(20);
    font-family: PingFang-SC-Medium;
    padding-bottom: pxToRem(140);
    li{
      padding-top: pxToRem(40);
      .orderName{
        padding-left: pxToRem(16);
        font-family: PingFang-SC-Bold;
        font-size: pxToRem(30);
        color: #333333;
        border-bottom: solid pxToRem(2) #eeeeee;
        padding-bottom: pxToRem(10);
        .fr{
          margin-right: pxToRem(16);
          font-family: PingFang-SC-Medium;
          font-size: pxToRem(28);
          color: #f87a7c;
        }
      }
      .orderContent{
        display: flex;
        padding-bottom: pxToRem(30);
        border-bottom: solid pxToRem(2) #eee;
        .orderContentLeft{
          padding-top: pxToRem(30);
          padding-left: pxToRem(16);
          margin-right: pxToRem(20);
          img{
            width: pxToRem(120);
            height: pxToRem(120);
          }
        }
        .orderContentRight{
          padding-top: pxToRem(40);
          p:first-child{
            font-size: pxToRem(30);
            color: #333;
            margin-bottom: pxToRem(50);
          }
          p:last-child{
            font-size: pxToRem(26);
            color: #666;
          }
        }
      }
      .orderMoney{
        height: pxToRem(66);
        line-height: pxToRem(66);
        border-bottom: solid pxToRem(2) #eee;
        color:#f87a7c;
        font-size: pxToRem(28);
        span:first-child{
          margin-right: pxToRem(16);
        }
      }
      .orderBtn{
        padding-top: pxToRem(16);
        padding-bottom: pxToRem(16);
        span{
          display: inline-block;
          height: pxToRem(50);
          line-height: pxToRem(50);
          border: solid pxToRem(1) #dddddd;
          border-radius: pxToRem(8);
          padding: 0 pxToRem(20);
          margin-right: pxToRem(16);
          color:#666666;
          font-size: pxToRem(28);
        }
      }
      .line{
        height: pxToRem(20);
        background-color: #f5f5f5;
      }
      &:last-child{
        .line{
          display: none;
        }
      }
    }
  }
</style>

