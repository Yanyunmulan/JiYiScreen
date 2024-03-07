<script setup>

</script>






<template>
    <div id="info">
      <div id="box_title">
          <h3>&nbsp;&nbsp;试验日志&nbsp;&nbsp;</h3>
      </div>
      <div id="box_content">
        <div id="view_frame">
          <p  style="font-size: 18px;">08/12 7:40  夹持端固定</p>
          <p  style="font-size: 18px;">08/12 8:01  载荷1开始加载</p>
          <p  style="font-size: 18px;color: white;">08/12 8:03  载荷1加载完毕 </p>
          <p  style="font-size: 18px;color: white;" >08/12 8:05  载荷2开始加载 </p>

          <p  style="font-size: 18px;color: red;">08/12 8:08  警告：测点1数据超过许用值 </p>
          <p  style="font-size: 18px;color: white;">08/12 9:02  试验段2开始加载</p>
          <p  style="font-size: 18px;color: white;">08/12 9:02  试验段2加载完毕</p>
          <p  style="font-size: 18px;color: white;">08/12 9:02  试验段2开始加载</p>
          <p  style="font-size: 18px;color: white;">08/12 9:02  试验段2加载完毕</p>
          <p  style="font-size: 18px;color: white;">08/12 9:02  试验段2开始加载</p>
          <p  style="font-size: 18px;color: white;">08/12 9:02  试验段2加载完毕</p>
        </div>
      </div>
    </div>

  </template>
  



<style lang="scss" scoped>
#info {
    // position: absolute;
    // bottom: 20px;
    // left: 60px;
    width: 360px;
    height: 290px;
    
    margin: 0 auto;
    margin-top: 4px;
    margin-bottom: 6px;
    // height: 760px;
    background-color: rgba(225,225,225,0);
    border: 2px solid rgb(156, 156, 156);
}
#box_title {
    display: inline-block;
    height: 36px;
    padding-left: 8px;
    padding-right: 8px;
    color: #fff;
    line-height: 36px;
    margin: 6px;
    // height: 100%;
    background-color: #606488;
}
#box_content {
    // width: 30px;
    color: #fff;
    overflow: hidden;
}

#view_frame {
  width: 320px;
  height: 230px;
  margin-top: 10px;
  margin-left: 20px;
  padding-left: 20px;
  overflow: auto;
  border-left: 4px solid #73a5d9;
}




/* 定义滚动条轨道样式 */
::-webkit-scrollbar-track {
  background-color: rgba(255, 255, 255, 0.2); /* 背景颜色 */
}
	
/* 定义滚动条滑块样式 */
::-webkit-scrollbar-thumb {
  background-color: #73a5d9; /* 滑块颜色 */
  border-radius: 10px; /* 滑块边框半径 */
}
	
/* 定义滚动条边框样式 */
::-webkit-scrollbar {
  width: 6px; /* 滚动条宽度 */
}

/* 定义滚动条轨道悬停时的样式 */
::-webkit-scrollbar-track:hover {
  background-color: rgba(255, 255, 255, 0.2); ; /* 悬停时的背景颜色 */
}
</style> 
  





