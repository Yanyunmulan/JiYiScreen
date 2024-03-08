<script setup>
import { ref, onMounted } from 'vue';




    const currentTime = ref('');

    // 在组件挂载后开始更新时间
    onMounted(() => {
      // 更新时间函数
      const updateTime = () => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        currentTime.value = `${hours}:  ${minutes}:  ${seconds}`;
      };

      // 每秒更新一次时间
      setInterval(updateTime, 1000);

      // 立即更新一次时间
      updateTime();
    });

    // return {
    //   currentTime
    // };
  

</script>

<template>
    <div id="left">
        <div class="logo">
          <img src="@/assets/logo.png" alt="">
        </div>
        <div class="title">
          <h1>机翼结构强度试验</h1>
          <div class="time">
            <p>{{ currentTime }}</p>
          </div>
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 50px;
  margin-top: 28px;
  border-top: 2px solid #3c67bc;
  border-bottom: 2px solid #3c67bc;
}

.time p {
  color: #99adcd;
  font-size: 30px;
}

</style>