<template>
  <div id="app">
   <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>
<script>
export default {
  name: 'App',
  data() {
    return{
      isRouterAlive:true
    }
  },
  provide(){
    return{
      reload:this.reload
    }
  },
  methods: {
    reload(){
      this.isRouterAlive = false;
      this.$nextTick(function(){
        this.isRouterAlive = true;
      })
    }
  }
}
</script>
<style lang="scss">
body {
  width: 1920px;
  height: 1080px;
  margin: 0px;
  padding: 0px;
  }
::-webkit-scrollbar{
  display: none
}
#app{
  font-family: "Microsoft Yahei", "微软雅黑";
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
  background-size: 100% 100%;
  // background-image: url('./assets/img/home/background.png');
  position: absolute;
  width:100%;
  height: 100%;  
}
</style>
