<template>
    <NavigationBar />
    <div class="mon-main-desktop">
        <div class="left-area">
            <div class="rekening fixed-header">
                <div class="title-row">
                    <h2>Dompet</h2>
                    <a class="button-chip">Pilih semua</a>
                </div>
                <div class="grid-rekening">
                    <CardRekening />
                    <CardRekening />
                    <CardRekening />
                </div>
            </div>
            <div class="mon-column">
                <div class="mon-row-padded">
                    <div id="TotalSaldo">
                        <h3>Total Saldo</h3>
                        <h2>Rp180.000</h2>
                    </div>
                    <div id="ArusKas">
                        <h3>Arus Keuangan</h3>
                        <div class="mon-space-between">
                            <a>Pemasukan</a>
                            <a>Rp100.000</a>
                        </div>
                        <div class="mon-space-between">
                            <a>Pengeluaran</a>
                            <a>-Rp50.000</a>
                        </div>
                        <div class="mon-space-between">
                            <h4>Jumlah</h4>
                            <h4>Rp50.000</h4>
                        </div>
                    </div>
                    <div id="StrukturPengeluaran">
                        <h3>Struktur Pengeluaran</h3>
                        <PersentasePengeluaran />
                        <PersentasePengeluaran />
                        <PersentasePengeluaran />
                        <PersentasePengeluaran />
                        <PersentasePengeluaran />
                    </div>
                </div>
                <div class="mon-row-padded">
                    <div id="TransactionRecords">
                        <h3>Riwayat Transaksi</h3>
                        <RecordRow />
                        <RecordRow />
                        <RecordRow />
                        <RecordRow />
                        <RecordRow />
                        <RecordRow />
                        <RecordRow />
                        <RecordRow />
                        <RecordRow />
                    </div>
                </div>
            </div>
            
        </div>
        <div class="right-area">
            <DetailTransaksi />
        </div>
    </div>
</template>

<script>
import NavigationBar from '@/components/NavigationBar.vue'
import RecordRow from '@/components/RecordRow.vue'
import CardRekening from '@/components/CardRekening.vue'
import PersentasePengeluaran from '@/components/PersentasePengeluaran.vue'
import BuatTransaksi from '@/components/BuatTransaksi.vue'
import DetailTransaksi from '../components/DetailTransaksi.vue'
export default {
    name: "DashboardView",
    components: {
    NavigationBar,
    RecordRow,
    CardRekening,
    PersentasePengeluaran,
    BuatTransaksi,
    DetailTransaksi,
}
}

</script>