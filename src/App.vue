<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
  @import '../static/scss.scss'; //导入外部scss文件 
  .collageingContent{
    .mint-actionsheet-listitem{
      background-color: #fff;
      font-size: pxToRem(34);
      color: #666;
      text-align: left;
      padding-left: pxToRem(36);
    }
    .mint-actionsheet-listitem:first-child{
      background-color: #f7f7f7;
      font-size: pxToRem(34);
      color: #333;
      text-align: center;
      padding-left: 0;
    }
  }
</style>
