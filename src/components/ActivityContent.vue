<template>
  <stylax-button :showText="'Scan'" v-on:click="scanNFC = true"></stylax-button>
  <stylax-button :showText="'Map'"></stylax-button>
  <stylax-button
    :showText="'Bibliothèque'"
    v-on:click="showLibrary = true"
  ></stylax-button>
  <modal-nfc
    :scanNFC="scanNFC"
    :canCancel="true"
    @NFCReaded="NFCReaded"
    @close="scanNFC = false"
  ></modal-nfc>
  <modal-library
    :show="showLibrary"
    @close="showLibrary = false"
  ></modal-library>
</template>

<script>
import StorageService from "../services/StorageService.js";
import StylaxButton from "./StylaxButton";
import ModalNfc from "./ModalNfc.vue";
import ModalLibrary from "./ModalLibrary.vue";

export default {
  components: {
    StylaxButton,
    ModalNfc,
    ModalLibrary,
  },
  data() {
    return {
      clicked: "non",
      scanNFC: false,
      showLibrary: false,
    };
  },
  methods: {
    NFCReaded(serial_number) {
      this.scanNFC = false;
      if (serial_number) {
        try {
          StorageService.discoverChip(serial_number);
        } catch (err) {
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
