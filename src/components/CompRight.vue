<script setup>
import InfoBoxs04 from './infos/InfoBoxs04.vue'
import InfoBoxs05 from './infos/InfoBoxs05.vue'
import InfoBoxs06 from './infos/InfoBoxs06.vue'

</script>

<template>
    <div id="right">
        <InfoBoxs04></InfoBoxs04>
        <InfoBoxs05></InfoBoxs05>
        <InfoBoxs06></InfoBoxs06>
    </div>
</template>



<style lang="scss" scoped>
#right {
    position: absolute;
    top: 60px;
    right: 60px;
    width: 400px;
    height: 1020px;
    backdrop-filter: blur(10px); /* 设置模糊程度 */
    background-color: rgba($color: #000000, $alpha: 0.5);
    // background-color: rgba(225,225,225,0.1);
}

</style>







