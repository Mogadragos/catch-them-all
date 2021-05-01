<template>
  <button class="LauchnBtn" v-on:click="LaunchActivity">
    {{ launchButtonText }}
  </button>
  <button v-if="isActiveActivity" v-on:click="scanNFC = true">
    Changer d'activité ?
  </button>
  <nfc-modal :scanNFC="scanNFC" @NFCReaded="NFCReaded"></nfc-modal>
</template>

<script>
import StorageService from "../services/StorageService.js";
import NfcModal from "./ModalNfc.vue";

export default {
  emits: ["StartActivity"],
  components: {
    NfcModal,
  },
  data() {
    return {
      launchButtonText: "LAUNCH",
      isActiveActivity: false,
      scanNFC: false,
    };
  },
  methods: {
    LaunchActivity() {
      if (this.isActiveActivity) {
        this.LoadActive();
      } else {
        this.scanNFC = true;
      }
    },
    LoadActive() {
      StorageService.confirmActiveActivity();
      this.$emit("StartActivity");
    },
    NFCReaded(serial_number) {
      this.scanNFC = false;
      if (serial_number) {
        StorageService.setActivity(serial_number);
        this.$emit("StartActivity");
      } else {
        alert("Impossible de lire le contenu du Tag NFC.");
      }
    },
  },
  mounted() {
    const activityName = StorageService.isActiveActivity();
    if (activityName !== "") {
      this.launchButtonText = "Reprendre " + activityName;
      this.isActiveActivity = true;
    }
  },
};
</script>

<style>
.LauchnBtn {
  border-radius: 50%;
  margin: 0;
  padding: 5px 12px;
  height: 300px;
  width: 300px;
  outline: none;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  background-color: #ffffff;
  border: 1px solid rgba(22, 76, 167, 0.6);
  color: #1d89ff;
  font-weight: 400;
  font-size: 20px;
  font-family: inherit;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);
}
</style>
