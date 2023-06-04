<template>
    <div class="strukturPengeluaranDiv">
        <a class="textBody2Bold">
            Struktur Pengeluaran
        </a>
        <div class="pengeluaranRow">
            <img class="categoryIcon" src="@/assets/icon/kategori/makanan.svg"/>
            <a id="categoryPengeluaran" class="textBody2">Makanan</a>
            <a class="textBody2">Rp520.000</a>
            <a id="persentasePengeluaran" class="textBody2" :style="{color: colorLibrary.dark20}">80%</a>
        </div>
        <div class="pengeluaranRow">
            <img class="categoryIcon" src="@/assets/icon/kategori/belanja.svg"/>
            <a id="categoryPengeluaran" class="textBody2">Belanja Bulanan</a>
            <a class="textBody2">Rp150.000</a>
            <a id="persentasePengeluaran" class="textBody2" :style="{color: colorLibrary.dark20}">52%</a>
        </div>
        <a class="textBody3" :style="{color: colorLibrary.lightPrimary}">lihat lebih banyak</a>
    </div>
</template>

<style scoped>
.strukturPengeluaranDiv {
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 15px;
}
.pengeluaranRow {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 15px;
}
#categoryPengeluaran {
    flex-grow: 1;
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