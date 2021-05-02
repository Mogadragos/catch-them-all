<template>
  <section class="h-33 title-section">
    <h1>{{ name }}</h1>
  </section>
  <section class="h-33 buttons-section">
    <stylax-button
      :showText="'Scan'"
      v-on:click="scanNFC = true"
    ></stylax-button>
    <stylax-button
      :showText="'Map'"
      v-on:click="showMap = true"
    ></stylax-button>
    <stylax-button
      :showText="'Bibliothèque'"
      v-on:click="showLibrary = true"
    ></stylax-button>
  </section>
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
  <modal-map
    :show="showMap"
    :canCancel="true"
    @close="showMap = false"
  ></modal-map>
  <modal-nfc-confirmation
    :chip="displayedChip"
    @close="displayedChip = null">
  </modal-nfc-confirmation>
</template>

<script>
import StorageService from "../services/StorageService.js";
import StylaxButton from "./StylaxButton";
import ModalNfc from "./ModalNfc.vue";
import ModalLibrary from "./ModalLibrary.vue";
import ModalMap from "./ModalMap.vue";
import ModalNfcConfirmation from "./ModalNfcConfirmation.vue";

export default {
  components: {
    StylaxButton,
    ModalNfc,
    ModalLibrary,
    ModalMap,
    ModalNfcConfirmation,
  },
  data() {
    return {
      clicked: "non",
      scanNFC: false,
      showLibrary: false,
      showMap: false,
      name: StorageService.activity.name,
      displayedChip: null,
    };
  },
  methods: {
    NFCReaded(serial_number) {
      this.scanNFC = false;
      if (serial_number) {
        try {
          StorageService.discoverChip(serial_number);
          this.displayedChip = StorageService.getChipData(serial_number);
        } catch (err) {
          this.displayedChip = null;
          alert(err);
        }
      } else {
        alert("Impossible de lire le contenu du Tag NFC.");
      }
    },
  },
};
</script>

<style>
.h-33 {
  height: 33%;
}

.title-section {
  display: flex;
  justify-content: center;
  align-items: center;
}

.title-section > h1 {
  font-size: 2.2em;
  text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);
}

.buttons-section {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
</style>
