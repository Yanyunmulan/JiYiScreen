import { ref } from "vue";
import * as echarts from 'echarts'


// 1.
export function useGetParkInfo() {

    const Info = ref([])
    const getInfo = () => {
      const Data = [211,432,123,342,234,345,456,453,432,323,432,123,343]
      Info.value = Data
    }

    return {
        Info,
        getInfo
    }

}



export function useInitBarChart(Info) {
    const barChart = ref(null)
    const initBarChart = () => {
      const myChart = echarts.init(barChart.value)
      
      const option = {
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: [1, 2, 3, 4, 5, 6, 7,8, 9, 10, 11, 12, 13],
            axisLine:{
              symbol:['none','arrow'],
              lineStyle: {
              color: '#ffffff'  // 设置 x 轴颜色------------------------------
              }
            },
          },
          yAxis: {
            type: 'value',
            min: '0',
            max: '500',
    
            axisLine:{
              show: true,
              symbol:['none','arrow'],
              lineStyle: {
              color: '#ffffff'  // 设置 x 轴颜色------------------------------
              }
    
            },
            splitLine: {
              show: false
            }
    
          },
          series: [
            {
              data: Info.value,
              type: 'line',
              showSymbol: false,
              lineStyle:{
                color: "#fff"
              },
              areaStyle: {
                color: '#fff'
              }
            }
          ]
          };
      
      myChart.setOption(option)
    }

    return {
        barChart,
        initBarChart
    }
}



// 2.


export function useGetLineInfo() {


  const gridData = ref([])
  // 定义折线图数据
  var lineData1 = [2.5, 1.5, 0.3, 2, 1.8];
  var lineData2 = [3.2, 3.6, 3.3, 3.6, 0.5];


  const getInfo = () => {

    for (var i = 0; i < 5; i++) {
      for (var j = 0; j < 5; j++) {
        gridData.value.push([i, j]);
      }
    }
  }

  return {
    gridData,
    lineData1,
    lineData2,
    getInfo
  }

}



export function useInitLineChart(gridData, lineData1, lineData2) {
  const barChart = ref(null)
  const initBarChart = () => {
    const myChart = echarts.init(barChart.value)
    
    // 配置选项
    var option = {
      // backgroundColor: rgb(255,255,255), // 设置背景颜色为黑色
      grid: {
        // 设置网格背景
        show: true,
        backgroundColor: '#f0f0f0',
        borderWidth: 1,
        borderColor: '#ccc',
        left: '5%',
        right: '5%',
        top: '5%',
        bottom: '5%'
      },
      xAxis: {
        type: 'category',
        // data: gridData.value.map(item => item[0])
        data: [0,1,2,3,4]
      },
      yAxis: {
        type: 'category',
        // data: gridData.value.map(item => item[1])
        data: [0,1,2,3,4]
      },
      series: [
        {
          name: 'Line 1',
          type: 'line',
          data: lineData1
        },
        {
          name: 'Line 2',
          type: 'line',
          data: lineData2,
        },

      ]
    };

    // 使用配置项显示图表
    myChart.setOption(option);
  }
  return {
    barChart,
    initBarChart
  }
}