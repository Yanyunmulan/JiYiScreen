<template>
	<div id="app04">
    <div id="box_title">
          <h3>&nbsp;&nbsp;组件状态&nbsp;&nbsp;</h3>
      </div>
		<div id="view04"></div>
	</div>
</template>

<script setup>
import { onMounted } from 'vue'; // 引入 Vue 3 的 onMounted 和 ref
import * as echarts from 'echarts'; // 引入 ECharts

// const chartRef = ref(null); // 创建 ref

onMounted(() => {
	init();
});

function init() {
	var chartDom04 = document.getElementById('view04');
	var myChart04 = echarts.init(chartDom04);
	var option04;

	var data = [
    {
      name: '2',
      children: [
        {
          name: '',
          children: [
            {
              name: '',
              value: 3
            },
            {
              name: '',
              value: 4,
            }
          ]
        }
      ]
    },
    {
      name: '3',
      children: [
        {
        name: '',
        children: [
          {
            name: '',
            value: 3
          },
          {
            name: '',
            value: 4,
          }
        ]
        }
      ]
    },

    {
      name: '1',
      children: [
        {
          name: '',
          children: [
            {
              name: '',
              value: 1
            },
            {
              name: '',
              value: 1
            },
            {
              name: '',
              value: 1
            }
          ]
        },

        {
          name: '',
          children: [
            {
              name: '',
              value: 2
            },
          ]
        },

        {
          name: '',
          children: [
            {
              name: '',
              value: 1
            },
            {
              name: '',
              value: 2
            },
          ]
        },
      ],
    },
	];

	option04 = {
    visualMap: {
      type: 'continuous',
      min: 0,
      max: 2,
      color: [ '#3267b9', '#85010c', '#c6501f'],
    },
    series: {
      type: 'sunburst',
      data: data,
      radius: [0, '90%'],
      label: {
        rotate: 'radial'
      },
      emphasis: {
        scale: false,  // 取消缩放特效
        focus: 'none'  // 取消高亮特效
      },
      blur: {}  // 取消默认的闪烁特效
    }
	};

	option04 && myChart04.setOption(option04);

		// // 添加点击事件
		// myChart.on('click', function(params) {
		// 	// 检查点击的区域是否对应名称为 '1' 的区域
		// 	if (params.data.name === '1') {
				
		// 		window.parent.changePage1();

		// 	}
			
		// 	else if (params.data.name === '2') {
				
		// 		window.parent.changePage2();
		// 	}
			
		// 	else if (params.data.name === '3') {
				
		// 		window.parent.changePage3();
		// 	}
			
		// 	else if (params.data.name === '4') {
				
		// 		window.parent.changePage4();
		// 	}

		// 	// 点击后取消所有特效
		// 	myChart.setOption({
		// 		series: {
		// 			emphasis: {
		// 				scale: false,  // 取消缩放特效
		// 				focus: 'none'  // 取消高亮特效
		// 			},
		// 			blur: {}  // 取消默认的闪烁特效
		// 		}
		// 	});
		// });

 }
</script>

<style lang="scss" scoped>
*{
	margin: 0;
	padding: 0;
}
body{

	overflow: hidden;
	
}
#app04{

	background-color: rgba(0, 0, 0, 0.0);


  // border: 3px solid rgb(188, 188, 188);
  width: 380px;
  height: 300px;
  
  margin: 0 auto;
  margin-top: 4px;
  margin-bottom: 6px;


  border-width: 2px;
  border-style: solid;
  border-color: rgb(188, 188, 188) transparent rgb(188, 188, 188) transparent; /* 上右下左 */
  border-image: linear-gradient(to bottom, rgb(156, 156, 156), transparent, transparent, rgb(156, 156, 156));
  border-image-slice: 1;
}
#view04{
	background-color: rgba(255, 255, 255, 0.0);
	height: 230px;
	width: 400px;
	/* float: left; */
	margin-left: 30px;
	cursor: pointer;
  
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



</style>