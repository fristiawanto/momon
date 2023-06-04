<template>
    <div class="pageTitle">
        <a>Pilih Rekening</a>
    </div>
    
    <div class="listRekening">
        <rekeningSelector/>
        <rekeningSelector/>
        <rekeningSelector :style="{background: colorLibrary.light80}"/>
        <rekeningSelector/>
        <rekeningSelector/>
        <rekeningSelector/>
    </div>
</template>

<style scoped>
.listRekening {
    display: flex;
    flex-direction: column;
    padding: 0px;
}

</style>

<script>
import rekeningSelector from './rekeningSelector.vue'
import colorLibrary from '../colorLibrary.js'
export default {
  name: "Pilih Rekening",
  components: {
    rekeningSelector,
  },
    data() {
    return {
      colorLibrary,
    };
  },
};
</script>