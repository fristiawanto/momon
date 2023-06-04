<template>
    <div class="pageTitle">
        <a>Detail Transaksi</a>
    </div>

    <!-- information area -->
    <div class="infoArea">
        <div class="transactionType">
            <img class="transactionIcon" src="@/assets/icon/tipeTransaksi/in.svg" :style="{background: colorLibrary.softGreen}"/>
            <a :style="{color: colorLibrary.green}">Pendapatan</a>
        </div>
        <a class="angkaTransaksi" :style="{color: colorLibrary.green}">+ Rp100.000</a>
        <div class="dataDiv">
            <a id="namaTransaksi">Gaji Januari</a>
            <div class="categoryIdentity">
                <img class="iconCategory" src="@/assets/icon/kategori/pendapatan.svg"/>
                <a id="categoryTransaksi">Gaji</a>
            </div>
        </div>
        <div class="dataDiv">
            <a class="labelDetail">Waktu Transaksi</a>
            <a class="textBody1">12 Mar 2023, 12.30</a>
        </div>
        <div class="dataDiv">
            <a class="labelDetail">Masuk ke</a>
            <div class="rekeningIdentity">
                <div class="rekeningIcon" :style="{background: colorLibrary.cyan}">
                    <img src="@/assets/icon/rekening/briefcase.svg"/>
                </div>
                <a class="textBody1">Mandiri</a>
            </div>
        </div>
        <div class="dataDiv">
            <a class="labelDetail">Pengirim</a>
            <a class="textBody1" id="pengirim">Kantor</a>
        </div>
        <div class="buttonEdit" :style="{background: colorLibrary.light80}">
            <img src="@/assets/icon/edit.svg"/>
            <a class="textBody2Bold">Edit Transaksi</a>
        </div>
    </div>
</template>

<style scoped>
.infoArea {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 15px;
    gap: 40px;
}
.transactionType {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 10px;
}
.transactionIcon {
    width: 32px;
    height: 32px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;
    border-radius: 10px;
}
.dataDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    gap: 5px;
}
.angkaTransaksi {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    display: flex;
    align-items: center;
    text-align: center;
}
#namaTransaksi {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
}
.labelDetail {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #B5B4B4;
}
.categoryIdentity {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 5px;
}
.rekeningIdentity {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    gap: 5px;
}
.rekeningIcon {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    width: 24px;
    height: 24px;
    border-radius: 10px;
}
.rekeningIcon img {
    width: 12px;
    height: 12px;
}
.buttonEdit {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    gap: 8px;
    border-radius: 10px;
}

</style>

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