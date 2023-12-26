<template>
    <div class="header-container">
        <div>
            <slot></slot>
        </div>
        <div>
            avatar
        </div>
    </div>
</template>

<script setup lang="ts">

    import SearchInput from './Input/SearchInput.vue';

</script>

<style scoped>
    .header-container{
        display: flex;
        justify-content:space-between;
    }
</style>