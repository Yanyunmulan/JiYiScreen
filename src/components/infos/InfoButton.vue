<script setup>

</script>



<template>
<div id="controller">
    <form id="fileForm" action="/submit" method="post" enctype="multipart/form-data">
        <table>
            <tr>
                <td><button id="startButton" type="button">开始</button></td>
                <td><button id="stopButton" type="button">暂停</button></td>
                <td><button id="settings" type="button">设置</button></td>
            </tr>
        </table>
    </form>
</div>
</template>



<style lang="scss" scoped>
#controller{
    /* background-color: rgba(255, 255, 255, 0.1); */
    height: 50px;
    width: 330px;
    /* float: left; */
    display: flex; /* 设置容器为flex布局 */
    justify-content: center; /* 水平居中对齐子元素 */
    align-items: center; /* 垂直居中对齐子元素 */
    position: absolute;
    bottom: 0px; /* 子元素顶部距离父元素顶部的距离，可以调整为其他值 */
    left: 680px; /* 子元素左侧距离父元素左侧的距离，可以调整为其他值 */
    transform: translate(-50%, -50%); /* 使子元素居中 */
}


#controller button {
    width: 120px;
    height: 40px;
    margin: 10px;
    background: rgba(53, 53, 53, 0.3);
    font-size: 18px;
    color: #fff;
    border: 4px solid #8dbbe0; /* 设置2px的边框，颜色为 #8dbbe0 */
    border-radius: 15px 0 15px 0; /* 设置10px的圆角边框 */
    /* border: none; */
    /* outline: none; //去除点击时产生的外部边框*/ 
    cursor: pointer; 
}
#controller input[type="file"] {
    width: 120px;
    height: 40px;
    margin: 10px;
    font-size: 18px;
    cursor: pointer;
    /* 隐藏默认的文件上传按钮 */
    opacity: 0;
    position: absolute;
    z-index: -1;
}

#controller input[type="file"] + label {
    display: inline-block;
    width: 120px;
    height: 40px;
    margin: 10px;
    background: rgba(141, 187, 224, 0.3) ;
    font-size: 18px;
    color: #fff;
    border: 4px solid #8dbbe0; /* 设置2px的边框，颜色为 #8dbbe0 */
    border-radius: 15px 0 15px 0; /* 设置10px的圆角边框 */
    /* border: none; */
    cursor: pointer;
    text-align: center;
    line-height: 40px;
    position: relative;
}

/* 样式修改为点击时的效果 */
#controller input[type="file"]:focus + label {
    outline: 2px solid #8dbbe0;
}
</style>