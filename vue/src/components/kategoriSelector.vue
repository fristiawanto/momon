<template>
<div class="kategoriRow">
    <img src="@/assets/icon/kategori/makanan.svg" id="iconKategori"/>
    <a class="textBody1" id="namaKategori">Makanan</a>
</div>
</template>

<style scoped>
.kategoriRow {
    display: flex;
    flex-direction: row;
    align-content: stretch;
    align-items: center;
    padding: 10px 20px;
    gap: 10px;
}
.kategoriRow img {
    width: 24px;
    height: 24px;
}
#iconKategori {
    width: 32px;
    height: 32px;
}
#namaKategori {
    flex-grow: 1;
}
</style>

<script>
</script>