<template>
	<div id="app07">
    <!-- <div id="box_title">
          <h3>&nbsp;&nbsp;组件状态&nbsp;&nbsp;</h3>
      </div> -->
		<div id="view07">
      <video controls loop autoplay muted>
        <source src="@/assets/video1.mp4" type="video/mp4">
      </video>
    </div>
	</div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
*{
	margin: 0;
	padding: 0;
}
body{

	overflow: hidden;
	
}
#app07{

	background-color: rgba(0, 0, 0, 0.0);


  // border: 3px solid rgb(188, 188, 188);
  width: 450px;
  height: 260px;
  
  // margin: 0 auto;
  margin-top: 64px;
  margin-left: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;


  border-width: 2px;
  border-style: solid;
  border-color: rgb(188, 188, 188) transparent rgb(188, 188, 188) transparent; /* 上右下左 */
  border-image: linear-gradient(to bottom, rgb(156, 156, 156), transparent, transparent, rgb(156, 156, 156));
  border-image-slice: 1;
}
#view07{
	background-color: rgba(255, 255, 255, 0.0);
	height: 230px;
	width: 400px;

	/* float: left; */

	cursor: pointer;
  
}

video::-webkit-media-controls {
  display: none !important;
}

video {
  outline: none;
  width: 100%;
  height: 100%;
}

// #box_title {
//     display: inline-block;
//     height: 36px;
//     padding-left: 8px;
//     padding-right: 8px;
//     color: #fff;
//     line-height: 36px;
//     margin: 6px;
//     // height: 100%;
//     background-color: #606488;
// }



</style>