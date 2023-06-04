<template>
<div class="recordTransaksi">
    <img class="categoryIcon" src="@/assets/icon/kategori/hiburan.svg"/>
    <div class="mainDataRecord">
        <a class="textBody3" id="categoryRecord" :style="{color: colorLibrary.dark0}">Hiburan</a>
        <a class="textBody2" id="namaTransaksi">Tiket Nonton</a>
        <a class="textBody3" id="rekeningRecord" :style="{color: colorLibrary.dark0}">Gopay</a>
    </div>
    <div class="numberRecord">
        <a class="textBody2" id="nilaiTransaksi" :style="{color: colorLibrary.nred}">- Rp75.000</a>
        <a class="textBody3" id="tanggalTransaksi" :style="{color: colorLibrary.dark0}">10 Mar</a>
    </div>
</div>
</template>

<style scoped>
.recordTransaksi {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 15px;
}
.categoryIcon {
    width: 32px;
    height: 32px;
}
.mainDataRecord {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    flex-grow: 1;
}
.numberRecord {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 0px;
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