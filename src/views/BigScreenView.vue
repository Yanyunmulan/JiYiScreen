<script setup>
import Title from '../components/CompTitle.vue'
import Left from '../components/CompLeft.vue'
import Right from '../components/CompRight.vue'
import Model from '../components/CompModel.vue'
import VScaleScreen from 'v-scale-screen'
import InfoBoxs07 from '@/components/infos/InfoBoxs07.vue';
import InfoButton from '@/components/infos/InfoButton.vue';
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
      <div class="msg03">
        <el-icon class="icon03"><Comment style="width: 40px; height: 40px;" /></el-icon>
        <div class="alarm">
          12
        </div>
      </div>
      <div class="msg04">
        <el-icon class="icon04"><InfoFilled style="width: 38px; height: 38px;" /></el-icon>
        <div class="alarm">
          3
        </div>
      </div>
      <!-- <el-icon class="icon03"><Comment style="width: 40px; height: 40px;" /></el-icon> -->
      <!-- <el-icon class="icon04"><InfoFilled style="width: 38px; height: 38px;" /></el-icon> -->

    </div>
    <div id="app">
      <Model></Model>
      <Title></Title>
      <Left></Left>
      <InfoBoxs07></InfoBoxs07>
      <InfoButton></InfoButton>
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
.icon03 {
  // position: absolute;
  // right: 120px;
  // top: 16px;
  width: 46px;
  height: 46px;
  // background-color: #4f71be;
  color: #ffffff;
  border-radius: 20%;
}
.icon04 {
  // position: absolute;
  // right: 64px;
  // top: 16px;
  width: 46px;
  height: 46px;
  background-color: #000000;
  color: #ffffff;
  border-radius: 20%;
}


.msg03 {
  position: absolute;
  right: 120px;
  top: 16px;
  width: 46px;
  height: 46px;
}


.msg04 {
  position: absolute;
  right: 64px;
  top: 16px;
  width: 46px;
  height: 46px;
}




.alarm {
  position: absolute;
  color: white;
  font-size: 17px;
  background-color: red;
  /*height: 24px;改前*/
  min-height: 24px;/*改后新增的代码*/
  min-width:24px;/*改后新增的代码*/
  line-height: 24px;
  right:-6%;
  top: -6px;
  text-align: center;
  -webkit-border-radius: 24px;
  border-radius: 24px;
  padding:2px;
}


</style>