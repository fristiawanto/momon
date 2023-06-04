<template>
<buatPengeluaran/>

</template>

<script>
import buatPengeluaran from '@/components/buatPengeluaran.vue'
export default (await import('vue')).defineComponent({
    name: "Home",
    components: {
        buatPengeluaran,
    }
})
</script>