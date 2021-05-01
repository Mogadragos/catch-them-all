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
</template>

<script>
import LaunchButton from "./LaunchButton.vue";
import StorageService from "../services/StorageService.js";
//import NFCService from "../services/NFCService.ts";

export default {
  components: {
    LaunchButton,
  },
  data() {
    return {
      launchButtonText: "LAUNCH",
      isActiveActivity: true,
      activityStart: false,
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
      console.log("scan");
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
