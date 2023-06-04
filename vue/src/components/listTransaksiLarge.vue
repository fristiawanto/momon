<template>
        <recordTransaksi/>
        <recordTransaksi/>
        <recordTransaksi/>
        <recordTransaksi/>
</template>

<style scoped>

recordTransaksi {
    padding: 10px 20px;
}
</style>

<script>
import recordTransaksi from '@/components/recordTransaksi.vue'
export default {
    name: "List Transaksi Large",
    components: {
        recordTransaksi,
    },
}

</script>