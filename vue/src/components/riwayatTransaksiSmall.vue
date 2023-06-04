<template>
    <div class="riwayatTransaksiDiv">
        <a class="textBody2Bold">Riwayat Transaksi</a>
    <recordTransaksi/>
    <recordTransaksi/>
    <recordTransaksi/>
    <recordTransaksi/>
    <a class="textBody3" :style="{color: colorLibrary.lightPrimary}">Lihat Lebih Banyak</a>
    </div>
</template>

<style scoped>
.riwayatTransaksiDiv {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: 20px;
    gap: 15px;
}

</style>

<script>
import colorLibrary from '../colorLibrary.js'
import recordTransaksi from '@/components/recordTransaksi.vue'
export default {
    
    /* components */
    
    name: "Riwayat Transaksi",
    components: {
        recordTransaksi,
    },
    
    /* Color Library */
    data() {
    return {
      colorLibrary,
    };
  },
}

</script>