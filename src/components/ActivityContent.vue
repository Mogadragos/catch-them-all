<template>
<section class="h-33 title-section">
  <h1>{{ name }}</h1>
</section>
  <section class="h-33 buttons-section">
    <stylax-button :showText="'Scan'" v-on:click="scanNFC = true"></stylax-button>
    <stylax-button :showText="'Map'"></stylax-button>
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
      name: StorageService.activity.name,
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
  text-shadow: 5px 5px 5px rgba(0, 0, 0, .20);
}

.buttons-section {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
</style>
