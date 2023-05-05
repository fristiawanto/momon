<template>
    <div id="DetailPengeluaran">
        <div class="in-page-header">
            <h2>Detail Transaksi</h2>
        </div>
        <div class="detail-transaksi area-grow">
            <button class="label-transaksi label-red">Pengeluaran</button>
            <h1>-Rp123.456</h1>
            <div class="mon-row-center">
                <h3>Nasi Ayam Bakar</h3>
                <a>Ayam Bakar Jono</a>
            </div>
            <div class="mon-row-center">
                <a class="font-body2 font-grey">Waktu Transaksi</a>
                <a>12 Feb 2023, 12.00</a>
            </div>
            <div>
                <a class="font-body2 font-grey">Kategori</a>
                <div class="mon-column">
                    <img src="@/assets/icon/makanan.svg">
                    <a>Makan</a>
                </div>
            </div>
            <div class="mon-row-center">
                <a class="font-body2 font-grey">Dompet</a>
                <a>Tunai</a>
            </div>
            <div class="in-page-cta">
                <button class="button-secondary">Edit Transaksi</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
#DetailPengeluaran {
    height: 100%;
}
.detail-transaksi {
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 30px;
    ;
}
.label-transaksi {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px 15px;
    gap: 5px;
    border-radius: 10px;
    border: 0;
}
.label-red {
    background-color: #FFDADA;
    color: #ED0D0D;
}
.in-page-cta {
    width: 100%;
    bottom: 0;
    height: fit-content;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 10px;
    text-align: center;
    align-items: stretch;
    gap: 10px;
    background-color: white;
}
</style>

<script>

</script>