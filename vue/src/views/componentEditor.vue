<template>
<listKategori/>
<listRekening/>

</template>

<script>
import detailPengeluaran from '@/components/detailPengeluaran.vue'
import detailPendapatan from '@/components/detailPendapatan.vue'
import detailTransfer from '@/components/detailTransfer.vue'
import buatPengeluaran from '@/components/buatPengeluaran.vue'
import buatPendapatan from '@/components/buatPendapatan.vue'
import buatTransfer from '@/components/buatTransfer.vue'
import riwayatTransaksiSmall from '@/components/riwayatTransaksiSmall.vue'
import listTransaksiLarge from '@/components/listTransaksiLarge.vue'
import strukturPengeluaran from '@/components/strukturPengeluaran.vue'
import graphSaldo from '@/components/graphSaldo.vue'
import dana from '@/components/dana.vue'
import arusKas from '@/components/arusKas.vue'
import listKategori from '@/components/listKategori.vue'
import listRekening from '@/components/listRekening.vue'

export default {
    name: "componentEditor",
    components: {
        detailPengeluaran,
        detailPendapatan,
        detailTransfer,
        buatPengeluaran,
        buatPendapatan,
        buatTransfer,
        riwayatTransaksiSmall,
        listTransaksiLarge,
        strukturPengeluaran,
        graphSaldo,
        dana,
        arusKas,
        listKategori,
        listRekening,
    }
}
</script>