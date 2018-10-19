<template>
  <div>
    <div class="tab">
      <span @click="tabBtn('AllCollages')" :class="{activeTab:activeTab == 'AllCollages' ? true : false}">所有拼团</span>
      <span @click="tabBtn('myCollages')" :class="{activeTab:activeTab == 'AllCollages' ? false : true}">我的拼团</span>
    </div>
    <allCollage v-if="activeTab=='AllCollages'?true:false"></allCollage>
    <myCollage v-if="activeTab=='AllCollages'?false:true"></myCollage>
  </div>
</template>

<script>
  import allCollage from "./all_collage.vue"; //引入所有拼团子模块
  import myCollage from "./my_collage.vue"; //引入我的拼团子模块
  export default {
    data () {
      return {
        activeTab: 'AllCollages'
      }
    },
    methods:{
      tabBtn(val){ //切换tab
        this.activeTab = val;
      }
    },
    created(){
      this.https.post("/news/index")
      .then((res)=>{
        console.log(res)
      })
      .catch((res)=>{
        console.log(res)
      })
    },
    watch:{

    },
    components:{
      allCollage,
      myCollage
    }
  }
</script>

<style scoped lang="scss">
  @import '../../../static/scss.scss'; //导入外部scss文件 
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
</style>
