<template>
    <div class="graphSaldoDiv">
        <div class="graphTitle">
            <a class="textBody2">Total Saldo</a>
            <a class="saldoTitle">Rp4.250.000</a>
        </div>

        <!--graphic line-->
        <div class="graphLineDiv">

        </div>

        <div class="graphDateDiv">
            <a class="textBody3">1</a>
            <a class="textBody3">5</a>
            <a class="textBody3">10</a>
            <a class="textBody3">15</a>
            <a class="textBody3">20</a>
            <a class="textBody3">25</a>
            <a class="textBody3">30</a>
        </div>

        <!--graphic line-->
        <div class="timeSelector">
            <div class="timeCell">
                <a class="textBody3">7H</a>
            </div>
            <div class="timeCell" id="timeCellSelected" :style="{background: colorLibrary.light40}">
                <a class="textBody3">31H</a>
            </div>
            <div class="timeCell">
                <a class="textBody3">3B</a>
            </div>
            <div class="timeCell">
                <a class="textBody3">6B</a>
            </div>
            <div class="timeCell">
                <a class="textBody3">12B</a>
            </div>
        </div>

    </div>
</template>

<style>
.graphSaldoDiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 50px 0px;
    gap: 25px;
}
.graphTitle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
}
.saldoTitle {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
}
.graphDateDiv {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0px 10px;
    gap: 20px;
}
.timeSelector {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px;
    border-radius: 10px;
    
}
.timeCell {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;
    background: #F8F8F8;
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