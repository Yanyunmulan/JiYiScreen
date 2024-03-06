<script setup>
import InfoBoxs01 from './infos/InfoBoxs01.vue'
import InfoBoxs02 from './infos/InfoBoxs02.vue'
import InfoBoxs03 from './infos/InfoBoxs03.vue'

</script>

<template>
    <div id="left">
        <InfoBoxs01></InfoBoxs01>
        <InfoBoxs02></InfoBoxs02>
        <InfoBoxs03></InfoBoxs03>
    </div>
</template>



<style lang="scss" scoped>
#left {
    position: absolute;
    bottom: 20px;
    left: 60px;
    width: 380px;
    height: 880px;
    background-color: rgba(255, 255, 255, 0.1);
}

</style>