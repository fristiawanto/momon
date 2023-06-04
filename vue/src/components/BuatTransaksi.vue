<template>
    
    <div class="mon-create-transaction" id="Pemasukan">
    
    <div class="fixed-header">
        <!-- HEADER -->
        <div class="create-transaction-header">
        <h3>Buat Transaksi</h3>
        </div>

        <!-- NAVIGATION -->
        <div class="mobile-navigation">
            <div class="mon-space-between">
                <button class="button-chip area-grow">Pendapatan</button>
                <button class="button-chip area-grow">Pengeluaran</button>
                <button class="button-chip area-grow">Transafer</button>
            </div>
        </div>
    </div>
    
    
    <!-- INPUT NUMBER -->
    <div class="create-transaction-div">
        <input class="create-transaction-input" type="number" placeholder="0" pattern="(d{3})">
    </div>

    <!-- TRANSACTION DETAILS -->
    <div class="create-transaction-details">
        <div class="select-rekening">
            <a class="card-title">Pilih Rekening</a>
            <div class="mon-space-between">
                <div class="rekening-id area-grow">
                    <div class="icon-rekening-small" :style= "{'background-color': colorLibrary.teal}">
                        <img src="@/assets/icon/rekening/card.svg">
                    </div>
                    <a>Tunai</a>
                </div>
                <img class="icon" src="@/assets/icon/right.svg">
            </div>
        </div>
        <div class="select-category">
            <div class="category-id-wrapper">
                <a class="card-title">Kategori</a>
                <div class="category-id">
                    <img class="category-icon-small" src="@/assets/icon/tugas.svg">
                    <a>Keperluan Pendidikan</a>
                </div>
            </div>
            <img class="icon" src="@/assets/icon/right.svg">
        </div>
        <a>Detail</a>
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


<script>
import colorLibrary from '../colorLibrary.js'
export default {
  data() {
    return {
      colorLibrary,
    };
  },
};
</script>