<template>
    <div id="info">
    <div id="box_title">
        <h3>&nbsp;&nbsp;结构组件&nbsp;&nbsp;</h3>
    </div>
    <div id="box_content">
      <div id="view_frame">
        <el-tree
        style="max-width: 600px"
        :data="data"
        :props="defaultProps"
        @node-click="handleNodeClick"
        :default-expand-all=true
        />
      </div>

    </div>
    </div>

  </template>
  
  <script setup>
  const handleNodeClick = (data) => {
    console.log(data)
  }
  
  const data = [
    {
      label: '根部翼盒1',
      children: [
        {
          label: '前梁1',
          children: [
            {
              label: '接头1',
            },
          ],
        },
        {
          label: '翼肋1',
          children: [
            {
              label: '腹条1',
            },
            {
              label: '前缘1',
            },
            {
              label: '后缘1',
            },
            {
              label: '腹条2',
            },
            {
              label: '前缘2',
            },
            {
              label: '后缘2',
            },
          ],
        },
        {
          label: '后梁1',
          children: [
            {
              label: '接头1',
            },
            {
              label: '连接处1',
            },
          ],
        },
      ],
    },

  ]
  
  const defaultProps = {
    children: 'children',
    label: 'label',
  }
  </script>


<style lang="scss" scoped>
#info {
    // position: absolute;
    // bottom: 20px;
    // left: 60px;
    width: 360px;
    height: 300px;
    
    margin: 0 auto;
    margin-top: 4px;
    margin-bottom: 6px;
    // height: 760px;
    background-color: rgba(225,225,225,0);
    border: 3px solid rgb(188, 188, 188);
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
  height: 240px;
  margin-left: 20px;
  overflow: auto;
}
.el-tree {
  background-color: rgba($color: #000000, $alpha: 0);
  color: #fff;
}







/* 定义滚动条轨道样式 */
::-webkit-scrollbar-track {
  background-color: rgba(255, 255, 255, 0.2); /* 背景颜色 */
}
	
/* 定义滚动条滑块样式 */
::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.4); /* 滑块颜色 */
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
  


