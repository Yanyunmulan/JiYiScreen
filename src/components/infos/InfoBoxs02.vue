<script setup>
import { onMounted } from 'vue';
import { useGetParkInfo, useInitBarChart } from '../../views/composables/bigscreen'
const { Info, getInfo } = useGetParkInfo()
const { barChart, initBarChart } = useInitBarChart(Info)

onMounted(async() => {
  await getInfo()
  initBarChart()
})
</script>


<template>
    <div id="info">
    <div id="box_title">
        <h3>&nbsp;&nbsp;试验加载概览&nbsp;&nbsp;</h3>
    </div>
    <div id="box_content">
			<div id="view_frame">
				<div id="view" ref="barChart"></div>
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
    
    margin: 0 auto;
    margin-top: 4px;
    margin-bottom: 6px;
    // height: 760px;
    background-color: rgba(225,225,225,0);
    // border-top: 3px solid #536f97;



    border-width: 2px;
    border-style: solid;
    // border-color: #536f97, transparent rgb(188, 188, 188), transparent; /* 上右下左 */
    // border-image: linear-gradient(to top, rgb(156, 156, 156), transparent, transparent, rgb(156, 156, 156));
    border-image: linear-gradient(to left top, rgb(156, 156, 156), transparent, transparent, rgb(156, 156, 156));
    border-image-slice: 1;
    // border-top: 3px solid #536f97;


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
}
#view {
  margin: 0 auto;
  width: 300px;
  height: 220px;
}

</style> 
  





