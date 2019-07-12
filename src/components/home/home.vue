<template>
  <div class="home">
    <headtitle :titlename="titlename"></headtitle>
    <maps></maps>
  </div>
</template>
<script>
import headtitle from '../../common/headtitle/headtitle.vue'
import maps from '../../common/map/map.vue'
export default {
  data() {
    return{
      titlename: '城运研判预警中心',
    }
  },
  components: {
    maps,
    headtitle
  },
  mounted() {
  },
  methods: {
  }
}
</script>
<style lang='scss' scoped>
body{
  margin: 0;
  padding: 0;
}
.home{
    width: 1920px;
    height: 1080px;
    margin: 0px;
    padding: 0px;
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(9,8,25,1);
}
</style>

