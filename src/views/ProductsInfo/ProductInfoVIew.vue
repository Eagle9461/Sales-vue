<template>
    <div class="common-layout">
        <el-container>
            <el-aside class="aside">
                <Sidebar/>
            </el-aside>
            <el-main>
                <Content/>
            </el-main>
        </el-container>
    </div>
</template>
  
<script setup lang="ts">

import Sidebar from "../../components/Sidebar.vue";
import Content from "./ContentView.vue";
</script>

<style scoped> 

    .aside{
        background-color: white;
        height: 100%;
        width: 230px;
    }

    .el-container{
        height: 100vh;
        background: #F8F8F8;
    }

</style>