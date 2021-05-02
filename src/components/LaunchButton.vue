<template>
  <button class="LauchnBtn" v-on:click="LaunchActivity">
    {{ launchButtonText }}
  </button>
  <stylax-button
    v-if="isActiveActivity"
    v-on:click="scanNFC = true"
    :showText="'Changer d\'activité ?'"
  ></stylax-button>
  <initialisation-component></initialisation-component>
  <modal-nfc :scanNFC="scanNFC" @NFCReaded="NFCReaded"></modal-nfc>
</template>

<script>
import StorageService from "../services/StorageService.js";
import StylaxButton from "./StylaxButton";
import ModalNfc from "./ModalNfc";
import InitialisationComponent from './InitialisationComponent';

export default {
  emits: ["StartActivity"],
  components: {
    StylaxButton,
    ModalNfc,
    InitialisationComponent,
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
        try {
          StorageService.setActivity(serial_number);
          this.$emit("StartActivity");
        } catch (err) {
          alert(err);
        }
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
  margin-top: 50px;
  margin-bottom: 50px;
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
  background-color: #3071c7;
  border: 1px solid rgba(27, 59, 129, 0.918);
  color: #ffffff;
  font-weight: 400;
  font-size: 20px;
  font-family: inherit;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);
}
</style>
