<template>
  <div class="hello">
    <ul>
      <li>{{s | TransformationNumber}}</li>
      <li>s</li>
      <li>s</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
     s:10009993
    }
  },
  methods:{

  },
  created(){
    console.log(this.utils.getNowTime());
    this.https.post("/news/index")
    .then((res)=>{
      console.log(res)
    })
    .catch((res)=>{
      console.log(res)
    })
  }
}
</script>

<style scoped lang="scss">
  @import '../../static/scss.scss'; //导入外部scss文件 
  li{
    font-size: pxToRem(22);
  }
</style>
