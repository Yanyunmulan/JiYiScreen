<script setup>
import { onMounted } from 'vue';
import { useGetLineInfo, useInitLineChart } from '../../views/composables/bigscreen'
const { gridData, getInfo, lineData1, lineData2 } = useGetLineInfo()
const { barChart, initBarChart } = useInitLineChart(gridData,lineData1,lineData2)

onMounted(async() => {
  await getInfo()
  initBarChart()
})
</script>


<template>
    <div id="info06">
    <div id="box_title">
        <h3>&nbsp;&nbsp;数据对比&nbsp;&nbsp;</h3>
    </div>
    <div id="box_content">
        <div id="view_frame">
            <div id="view" ref="barChart"></div>
        </div>
    </div>
    </div>

  </template>
  



<style lang="scss" scoped>
#info06 {
    width: 380px;
    height: 300px;

    margin: 0 auto;
    margin-top: 90px;
    margin-bottom: 6px;


    border-width: 2px;
    border-style: solid;
    border-color: rgb(188, 188, 188) transparent rgb(188, 188, 188) transparent; /* 上右下左 */
    border-image: linear-gradient(to bottom, rgb(156, 156, 156), transparent, transparent, rgb(156, 156, 156));
    border-image-slice: 1;
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
  margin-top: 20px;
  height: 200px;
}

</style> 
  





