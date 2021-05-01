<template>
  <section id="main-content">
    <launch-button
      v-if="!activityStart"
      :text="launchButtonText"
      :isActiveActivity="isActiveActivity"
      @LoadActive="LoadActive"
      @ScanNFC="ScanNFC"
    ></launch-button>
  </section>
  <section>
    <nfc-modal :scanNFC="scanNFC" @NFCReaded="NFCReaded"></nfc-modal>
  </section>
</template>

<script>
import LaunchButton from "./LaunchButton.vue";
import StorageService from "../services/StorageService.js";
import NfcModal from "./ModalNfc.vue";

export default {
  components: {
    LaunchButton,
    NfcModal,
  },
  data() {
    return {
      launchButtonText: "LAUNCH",
      isActiveActivity: false,
      activityStart: false,
      scanNFC: false,
    };
  },
  mounted() {
    const activityName = StorageService.isActiveActivity();
    if (activityName !== "") {
      this.launchButtonText = "Reprendre " + activityName;
      this.isActiveActivity = true;
    }
  },
  methods: {
    LoadActive() {
      StorageService.confirmActiveActivity();
      this.activityStart = true;
    },
    ScanNFC() {
      this.scanNFC = true;
    },
    NFCReaded(serial_number) {
      this.scanNFC = false;
      if (serial_number) {
        StorageService.setActivity(serial_number);
        this.activityStart = true;
      } else {
        alert("Impossible de lire le contenu du Tag NFC.");
      }
    },
  },
};
</script>

<style>
#main-content {
  height: calc(100vh - 50px);
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
