<script setup>

</script>

<template>
    <div id="left">
        <div class="logo">
          <img src="@/assets/logo.png" alt="">
        </div>
        <div class="title">
          <h1>机翼结构强度试验</h1>
          <div class="time"></div>
        </div>
    </div>
</template>



<style lang="scss" scoped>
#left {
    position: absolute;
    top: 30px;
    left: 40px;
    width: 460px;
    height: 160px;
    background-color: rgba(255, 255, 255, 0);
    z-index: 1;
}
.logo img {
  width: 150px;
  // display: inline;
}
.logo {
  position: relative;
  float: left;
  display: inline;
}
.title h1 {
  color: #fff;
  // display: block;
  
}
.title {
  position: relative;
  float: left;
  margin: 20px;
}
.time {
  width: 180px;
  height: 50px;
  margin-top: 28px;
  border-top: 2px solid #3c67bc;
  border-bottom: 2px solid #3c67bc;
}

</style>