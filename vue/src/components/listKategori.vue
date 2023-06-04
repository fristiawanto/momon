<template>
    <div class="pageTitle">
        <a>Pilih Kategori</a>
    </div>
    
    <div class="listKategori">
        <kategoriSelector/>
        <kategoriSelector :style="{background: colorLibrary.light80}"/>
        <kategoriSelector/>
        <kategoriSelector/>
        <kategoriSelector/>
    </div>
</template>

<style scoped>
.listKategori {
    display: flex;
    flex-direction: column;
    padding: 0px;
}

</style>

<script>
import kategoriSelector from './kategoriSelector.vue'
import colorLibrary from '../colorLibrary.js'
export default {
  name: "Pilih Kategori",
  components: {
    kategoriSelector,
  },
    data() {
    return {
      colorLibrary,
    };
  },
};
</script>