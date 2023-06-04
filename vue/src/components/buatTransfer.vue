<template>
    <!-- fixed header -->
    <div class="fixedHeader">
        <div class="pageTitle">
            <a>Buat Transaksi</a>
        </div>
        <div class="transactionTypeSelector">
            <button class="labelButton">
                Pendapatan
            </button>
            <button class="labelButton">
                Pengeluaran
            </button>
            <button class="labelButton" id="transactionTypeSelected" :style="{background: colorLibrary.lightSecondary, color: colorLibrary.lightPrimary}">
                Transfer
            </button>
        </div>
    </div>

    <!--area input data-->
    <div class="inputData">
        <div class="insertAmountDiv">
            <input v-model="inputValue" type="number" class="insertAmount" placeholder="Rp" v-thousand/>
        </div>
        <div class="rekeningSelector">
            <div class="mainRekeningData">
                <a class="textBody2Bold">Dari</a>
                <div class="rekeningIdentity">
                    <div class="rekeningIcon" :style="{background: colorLibrary.nred}">
                        <img src="@/assets/icon/rekening/card.svg"/>
                    </div>
                    <a class="textBody2">Mandiri</a>
                    <div class="rekeningSaldo">
                        <a class="textBody3">Saldo: Rp1.000.000</a>
                    </div>
                </div>
            </div>
            <img src="@/assets/icon/right.svg"/>
        </div>
        <div class="rekeningSelector">
            <div class="mainRekeningData">
                <a class="textBody2Bold">Tujuan</a>
                <div class="rekeningIdentity">
                    <div class="rekeningIcon" :style="{background: colorLibrary.cyan}">
                        <img src="@/assets/icon/rekening/ewallet.svg"/>
                    </div>
                    <a class="textBody2">Gopay</a>
                    <div class="rekeningSaldo">
                        <a class="textBody3">Saldo: Rp100.000</a>
                    </div>
                </div>
            </div>
            <img src="@/assets/icon/right.svg"/>
        </div>
        
        <!--input details-->
        <div class="inputDetails">
            <a class="textBody2Bold">Detail</a>
            <div class="questionDiv">
                <img class="questionIcon" src="@/assets/icon/teks.svg"/>
                <div class="questionMainData">
                    <a class="questionLabel">Nama transaksi</a>
                    <input class="questionAnswer" placeholder="Nama transaksi" type="text"/>
                </div>
            </div>

            <div class="questionDiv">
                <img class="questionIcon" src="@/assets/icon/waktu.svg"/>
                <div class="questionMainData">
                    <a class="questionLabel">Waktu transaksi</a>
                    <input class="questionAnswer" placeholder="1 Januari 2023, 20.50" type="datetime-local"/>
                </div>
            </div>

            <div class="questionDiv">
                <img class="questionIcon" src="@/assets/icon/orang.svg"/>
                <div class="questionMainData">
                    <a class="questionLabel">Pengirim</a>
                    <input class="questionAnswer" placeholder="Nama Pengirim" type="text"/>
                </div>
            </div>
        </div>

    </div>

    <!--fixed button-->
    <div class="CTA2Button">
        <button class="secondaryButton">Batal</button>
        <button class="primaryButton" style="flex-grow: 1;">Buat Transaksi</button>
    </div>

</template>

<style scoped>
.transactionTypeSelector {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px;
    gap: 10px;
    align-self: stretch;
}
.transactionTypeSelector button {
    flex-grow: 1;
}
.labelButton {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 5px 10px;
    border-radius: 10px;
    border: 0;
    background: #F8F8F8;
}
/* Rekening */
.rekeningSelector {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 15px;
    gap: 10px;
    align-self: stretch;
    background: #FFFFFF;
    border-radius: 10px;
}
.mainRekeningData {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 5px;
    flex-grow: 1;
}
.rekeningIcon {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;

    width: 24px;
    height: 24px;

    border-radius: 8px;
}
.rekeningIcon img {
    width: 12px;
    height: 12px;
}
.rekeningIdentity {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 10px;
}
.rekeningSaldo {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 2px 8px;

    background: #F8F8F8;
    border-radius: 8px;
}

/* Kategori */
.categorySelector {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 15px;
    gap: 10px;
    align-self: stretch;
    background: #FFFFFF;
    border-radius: 10px;
}

/* screen transaksi baru */
.insertAmountDiv {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
}
.insertAmount {
    width: 100%;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    border: 0;
    text-align: right;
    background: none;
    display: flex;
    align-items: center;
    text-align: right;
    min-height: 150px;
}
.insertAmount:focus {
    border: 0px solid;
    outline: 0;
}
.inputData {
    display: flex;
    flex-direction: column;
    background-color: #F8F8F8;
    padding: 15px;
    gap: 15px;
}
.mainCategoryData {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 5px;
    flex-grow: 1;
}
.categoryIdentity {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px;
    gap: 10px;
}
/* button */
.CTA2Button {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 15px;
    gap: 10px;
    background-color: #FFFFFF;
    position: fixed;
    margin-bottom: 0;
    width: 100%;
}
</style>


<script>
import colorLibrary from '../colorLibrary.js'
export default {
  data() {
    return {
      colorLibrary,
      inputValue: ''
    };
  },
  directives: {
    thousand: {
      bind(el) {
        el.addEventListener('input', function() {
          const value = this.value.replace(/\D/g, ''); // Remove non-digit characters
          const formatted = Number(value).toLocaleString(); // Format the number
          this.value = formatted;
        });
      }
    }
  },
};
</script>