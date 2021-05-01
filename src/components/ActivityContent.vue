<template>
  <stylax-button :showText="'Scan'" v-on:click="scanNFC = true"></stylax-button>
  <stylax-button :showText="'Map'"></stylax-button>
  <stylax-button :showText="'Bibliothèque'"></stylax-button>
  <modal-nfc
    :scanNFC="scanNFC"
    :canCancel="true"
    @NFCReaded="NFCReaded"
    @close="scanNFC = false"
  ></modal-nfc>
</template>

<script>
import StorageService from "../services/StorageService.js";
import StylaxButton from "./StylaxButton";
import ModalNfc from "./ModalNfc.vue";

export default {
  components: {
    StylaxButton,
    ModalNfc,
  },
  data() {
    return {
      clicked: "non",
      scanNFC: false,
    };
  },
  methods: {
    NFCReaded(serial_number) {
      this.scanNFC = false;
      if (serial_number) {
        try {
          StorageService.discoverChip(serial_number);
        } catch(err) {
          alert(err);
        }
      } else {
        alert("Impossible de lire le contenu du Tag NFC.");
      }
    },
  },
};
</script>

<style></style>
