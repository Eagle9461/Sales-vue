<template>
    <el-row class="tac">
        <el-col :span="24">
            <h5 class="title">Sales</h5>
            <el-menu :default-active="actived_number" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                <el-menu-item v-for="(tab, key, index) in _tablists" :index="key">
                    <el-icon><icon-menu /></el-icon>
                    <span>{{ tab }}</span>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'

const tablists = ref([]);

const _tablists = ["Dashboard", "Lab Test", "Appointment", "Medicine order", "Message", "Payment", "Settings"];

const actived_number = ref(1);

const handleOpen = (key: string, keyPath: string[]) => {
}

const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<style scoped>
.title{
    color: gray;
    font-size: 22px;
    padding: 20px;
    
}

</style>