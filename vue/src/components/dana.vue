<template>
    <div class="danaDiv">
        <div class="danaTitle">
            <a class="textBody2Bold">
                Dana
            </a>
            <div id="buttonAdd">
                <img src="@/assets/icon/add.svg"/>
            </div>
        </div>
        <div class="rekeningGrid">
            <div class="rekeningCard">
                <div class="rekeningIcon" :style="{background: colorLibrary.nred}">
                    <img src="@/assets/icon/rekening/wallet.svg"/>
                </div>
                <div class="rekeningData">
                    <a id="rekeningNama" class="textBody2Bold">Tunai</a>
                    <a id="rekeningNilai" class="textBody3">Rp128.500</a>
                </div>
            </div>
            
            <div class="rekeningCard">
                <div class="rekeningIcon" :style="{background: colorLibrary.green}">
                    <img src="@/assets/icon/rekening/briefcase.svg"/>
                </div>
                <div class="rekeningData">
                    <a id="rekeningNama" class="textBody2Bold">Bank Mandiri Syariah</a>
                    <a id="rekeningNilai" class="textBody3">Rp12.438.500</a>
                </div>
            </div>
            
            <div class="rekeningCard">
                <div class="rekeningIcon" :style="{background: colorLibrary.cyan}">
                    <img src="@/assets/icon/rekening/coins.svg"/>
                </div>
                <div class="rekeningData">
                    <a id="rekeningNama" class="textBody2Bold">Gopay</a>
                    <a id="rekeningNilai" class="textBody3">Rp100.200</a>
                </div>
            </div>

        </div>
    </div>
</template>

<style>
.danaDiv {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    gap: 10px;
}
.danaTitle {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 10px;
}
#buttonAdd {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 5px;
    width: 24px;
    height: 24px;
    background-color: #F8F8F8;
    border-radius: 10px;
}
#buttonAdd img {
    width: 16px;
    height: 16px;
}
.rekeningGrid {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    padding: 0px;
    gap: 10px;
}
.rekeningCard {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 15px;
    gap: 10px;
    background: #F8F8F8;
    border-radius: 10px;
}
.rekeningIcon {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;

    width: 32px;
    height: 32px;
    border-radius: 10px;
}
.rekeningIcon img {
    width: 16px;
    height: 16px;
}
.rekeningData {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
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