<script setup>
import Title from '../components/CompTitle.vue'
import Left from '../components/CompLeft.vue'
import Right from '../components/CompRight.vue'
import VScaleScreen from 'v-scale-screen'
</script>


<template>
  <VScaleScreen width="1920" height="1080">
      <div id="decoration">
      <img class="zuoshang" src="@/assets/zuoshang.png" alt="">
      <img class="zuoxia" src="@/assets/zuoxia.png" alt="">
      <img class="youshang" src="@/assets/youshang.png" alt="">
      <img class="youxia" src="@/assets/youxia.png" alt="">
      <el-icon class="icon01"><House style="width: 30px; height: 30px;"/></el-icon>
      <el-icon class="icon02"><Document style="width: 30px; height: 30px;"/></el-icon>

    </div>
    <div id="app">
      <Title></Title>
      <Left></Left>
      <Right></Right>
    </div>
  </VScaleScreen>

  
</template>



<style lang="scss" scoped>
#app {
  // width: 1920px;
  // height: 1080px;
  background-color: #000000;
}
#decoration {
  // width: 1920px;
  // height: 1080px;
  background-color: #000000;
}
.zuoshang {
  position: absolute;
  left: 0;
  top: 0;
  width: 640px;
}
.zuoxia {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 500px;
}
.youshang {
  position: absolute;
  right: 0;
  top: 0;
  width: 640px;
}
.youxia {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 600px;
}
.icon01 {
  position: absolute;
  left: 0;
  top: 520px;
  width: 46px;
  height: 46px;
  background-color: #4f71be;
  color: #ffffff;
  border-radius: 20%;
}
.icon02 {
  position: absolute;
  left: 0;
  top: 586px;
  width: 46px;
  height: 46px;
  background-color: #000000;
  color: #ffffff;
  border-radius: 20%;
}
</style>