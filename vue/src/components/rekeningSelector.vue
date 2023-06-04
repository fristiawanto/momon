<template>
<div class="rekeningRow">
    <div class="iconRekening" id="rekeningIcon" :style="{background: colorLibrary.nred}">
        <img src="@/assets/icon/rekening/coins.svg"/>
    </div>
    <div class="rekeningIdentity">
        <a class="textBody1" id="namaRekening">Tunai</a>
        <a class="textBody2" id="saldoRekening">Rp215.000</a>
    </div>
</div>
</template>

<style scoped>
.rekeningRow {
    display: flex;
    flex-direction: row;
    align-content: stretch;
    align-items: center;
    padding: 10px 20px;
    gap: 10px;
}
.rekeningRow img {
    width: 24px;
    height: 24px;
}
.iconRekening {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    width: 32px;
    height: 32px;
}
.iconRekening img {
    width: 16px;
    height: 16px;
}
.rekeningIdentity {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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