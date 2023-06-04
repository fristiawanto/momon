<template>
    <div class="arusKasDiv">
        <a class="textBody2Bold">Arus Kas</a>
        
        <div class="arusKasRow">
            <a class="textBody2">Pemasukan</a>
            <a class="textBody2">Rp1.500.000</a>
        </div>
        
        <div class="arusKasRow">
            <a class="textBody2">Pengeluaran</a>
            <a class="textBody2">Rp500.000</a>
        </div>

        <div class="arusKasRow">
            <a class="textBody1Bold">Jumlah</a>
            <a class="textBody1Bold" :style="{color: colorLibrary.lightPrimary}">Rp1.000.000</a>
        </div>
    </div>

</template>

<style>
.arusKasDiv {
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 10px;
}
.arusKasRow {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-content: space-between;
    gap: 10px;
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