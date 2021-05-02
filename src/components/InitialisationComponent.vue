<template>
  <stylax-button
    :showText="buttonTitle"
    v-on:click="showAddModal = true"
  ></stylax-button>
  <modal-nfc
    :scanNFC="showAddModal"
    :title="modalTitle"
    :canCancel="true"
    @NFCReaded="NFCReaded"
    @close="showAddModal = false"
  ></modal-nfc>
</template>

<script>
import StylaxButton from "./StylaxButton";
import ModalNfc from "./ModalNfc";
import StorageService from "../services/StorageService.js";

export default {
  components: { StylaxButton, ModalNfc },
  data() {
    return {
      showAddModal: false,
      chipIndex: 0,
      modalTitle: "Puce de départ",
      buttonTitle: "Initialiser vos puces",
    };
  },
  methods: {
    NFCReaded(serial_number) {
      if (this.chipIndex === 0) {
        StorageService.saveStartChip(
          {
            activity_id: "1",
            start_chip_id: serial_number,
            name: "Activité 1",
          }
        );
      } else if (this.chipIndex % 2 === 0) {
        StorageService.saveChip({
          id: serial_number,
          label: "Puce " + this.chipIndex,
          link: "http://www.google.com",
          location: {
            latitude: 45.6512748,
            longitude: 0.1576745,
          },
        });
      } else {
        StorageService.saveChip({
          id: serial_number,
          label: "Puce " + this.chipIndex,
          link: "https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/7/1/6/71655ac356_50166765_panda-ge-ant-naissance.jpg",
          location: {
            latitude: 45.6512748,
            longitude: 0.1576745,
          },
        });
      }
      this.showAddModal = false;
      this.chipIndex++;
      this.modalTitle = "Puce numéro " + this.chipIndex;
      this.buttonTitle = "Initialiser vos puces : " + this.modalTitle;
    },
  },
};
</script>

<style></style>
