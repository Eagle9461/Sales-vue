<template>

    <input
        type="text"
        @input="handleInput"
        placeholder="Search.." 
    />
</template>

<script lang="ts" setup>
    const emit = defineEmits(['response']);
    
    const handleInput = (e:any) => {
        emit('response', e.target.value)
    }

</script>