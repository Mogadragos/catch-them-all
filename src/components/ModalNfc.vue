<template>
  <modal :show="scanNFC" :isFooter="canCancel" :closeText="'Annuler'" @close="stopScan = true">
    <template v-slot:body>
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </template>
  </modal>
</template>

<script>
import NFCService from "../services/NFCService.ts";
import Modal from "./Modal.vue";

export default {
  components: { Modal },
  props: {
    scanNFC: Boolean,
    canCancel: Boolean
  },
  data() {
    return {
      stopScan: false,
    };
  },
  created() {
    this.$watch("scanNFC", (newVal) => {
      if (newVal) {
        this.data = "scan";
        NFCService.Read()
          .then((data) => {
            if(this.stopScan) {
              this.$emit("close");
            } else {
              this.$emit("NFCReaded", data);
            }
          })
          .catch((err) => {
            console.error(err);
            this.$emit("NFCReaded", false);
          });
      }
    });
  },
};
</script>

<style>
.lds-ripple {
  display: inline-block;
  position: relative;
  width: 200px;
  height: 200px;
}
.lds-ripple div {
  position: absolute;
  border: 10px solid green;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1.5s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.75s;
}
@keyframes lds-ripple {
  0% {
    top: 90px;
    left: 90px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 180px;
    height: 180px;
    opacity: 0;
  }
}
</style>
