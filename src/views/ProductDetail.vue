<template>
    <dif>
        {{ details }}
    </dif>
</template>

<script>
import { onMounted, ref } from 'vue'

export default {
    name: 'ProductDetail',
    props: {
        id: Number
    },
    setup(props) {
        
        const details = ref({});

        onMounted(() => {
            fetch('https://dummyjson.com/products/'+props.id)
            .then( res => res.json())
            .then( res => details.value = res );
        });

        return { ...props, details };
    }
}

</script>