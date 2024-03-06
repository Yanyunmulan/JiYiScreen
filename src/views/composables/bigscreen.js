import { ref } from "vue";
import * as echarts from 'echarts'



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