<template>
    <div class="mon-create-transaction" id="Pemasukan">
    <div class="create-transaction-header fixed-header">
        <h2>Buat Transaksi</h2>
        <div class="mon-space-between">
            <button class="button-chip area-grow">Pendapatan</button>
            <button class="button-chip area-grow">Pengeluaran</button>
            <button class="button-chip area-grow">Transafer</button>
        </div>
    </div>
    <input type="number" class="transaction-value-input" placeholder="masukkan angka disini" pattern="(d{3})">
    <div class="create-transaction-details">
        <div class="select-rekening">
            <h4>Rekening</h4>
            <div class="mon-space-between">
                <a class="area-grow">Tunai</a>
                <img class="icon" src="@/assets/icon/right.svg">
            </div>
        </div>
        <div class="select-category">
            <h4>Kategori</h4>
            <div class="mon-space-between">
                <img class="icon" src="@/assets/icon/tugas.svg">
                <a class="area-grow">Keperluan Pendidikan</a>
                <img class="icon" src="@/assets/icon/right.svg">
            </div>
        </div>
        <h3>Detail</h3>
        <form class="transaction-detail-form">
            <div class="mon-rowinput">
                <img class="input-icon" src="@/assets/icon/teks.svg">
                <div class="mon-colinput">
                    <label>Nama Transaksi</label>
                    <input class="forminput" type="text" placeholder="Misalnya nama produk atau kegiatan">
                </div>
            </div>
            <div class="mon-rowinput">
                <img class="input-icon" src="@/assets/icon/waktu.svg">
                <div class="mon-colinput">
                    <label>Waktu Transaksi</label>
                    <input class="forminput" type="datetime-local" placeholder="Pilih waktu">
                </div>
            </div>
            <div class="mon-rowinput">
                <img class="input-icon" src="@/assets/icon/orang.svg">
                <div class="mon-colinput">
                <label>Penerima</label>
                    <input class="forminput" type="text" placeholder="Nama penerima transaksi">
                </div>
            </div>
            <input type="submit" class="button-primary area-grow" value="Buat Transaksi">
        </form>
    </div>
</div>
</template>