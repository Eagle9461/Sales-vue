<template>
    <el-row class="tac">
        <el-col :span="24">
            <h5 class="title">Sales</h5>
            <el-menu :default-active="actived_number" class="el-menu-vertical-demo mymenu" @open="handleOpen" @close="handleClose">
                <el-menu-item class="mymenu-item" :index="1">
                    <el-icon><icon-dashboard/></el-icon>
                    <span>Dashboard</span>
                </el-menu-item>
                <el-menu-item class="mymenu-item" :index="2">
                    <el-icon><icon-lab-test/></el-icon>
                    <span>Lab Test</span>
                </el-menu-item>
                <el-menu-item class="mymenu-item" :index="3">
                    <el-icon><icon-appointment /></el-icon>
                    <span>Appointment</span>
                </el-menu-item>
                <el-menu-item class="mymenu-item" :index="4">
                    <el-icon><icon-medicine-order/></el-icon>
                    <span>Medicine Order</span>
                </el-menu-item>
                <el-menu-item class="mymenu-item" :index="5">
                    <el-icon><icon-message/></el-icon>
                    <span>Message</span>
                </el-menu-item>
                <el-menu-item class="mymenu-item" :index="6">
                    <el-icon><icon-payment/></el-icon>
                    <span>Payment</span>
                </el-menu-item>
                
                <el-menu-item class="mymenu-item" :index="7">
                    <el-icon><icon-settings/></el-icon>
                    <span>Settings</span>
                </el-menu-item>
                <el-menu-item class="mymenu-item bottom-menu" :index="8">
                    <el-icon><icon-help/></el-icon>
                    <span>Help</span>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import IconAppointment from "./icons/IconAppointment.vue";
import IconDashboard from "./icons/IconDashboard.vue";
import IconLabTest from "./icons/IconLabTest.vue";
import IconMedicineOrder from "./icons/IconMedicineOrder.vue";
import IconMessage from "./icons/IconMessage.vue";
import IconPayment from "./icons/IconPayment.vue";
import IconSettings from "./icons/IconSettings.vue";
import IconHelp from "./icons/IconHelp.vue"


const actived_number = ref(1);

const handleOpen = (key: string, keyPath: string[]) => {
}

const handleClose = (key: string, keyPath: string[]) => {
}
</script>

<style scoped>
.title{
    margin-left: 29px;
    margin-top: 55px;
    color: #013CC6;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    
}
.mymenu{
    margin: 44.5px 0 0 20.5px ;    
    border: none;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    list-style-type: none; /* Removes bullet points */
    padding: 0; /* Removes default padding */
}
.mymenu-item{
    color: #000;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.32px;
    padding: 20.5px;
}
.bottom-menu{
    margin-top: auto;
}
.is-active.mymenu-item{
    color: #0B63F8;
}
</style>