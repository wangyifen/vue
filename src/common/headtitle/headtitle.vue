<template>
  <div class="head">{{titlename}}</div>
</template>
<script>
export default {
  props: ['titlename'],
  data() {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
body{
  margin: 0;
  padding: 0;
}
.head{
    width: 707px;
    height: 72px;
    margin: 0;
    padding: 0;
    position: absolute;
    left: 610px;
    top: 0px;
    z-index: 10000;
    background-size: 100% 100%;
    background-image: url('./img/top.png');
    line-height: 90px;
    text-align: center;
    font-size:28px;
    font-family:PingFangSC-Medium;
    font-weight:500;
    color:rgba(254,255,255,1);
    text-shadow:0px 5px 0px rgba(2,32,54,1);
}
</style>


