<template>
  <section id="main-content">
    <launch-button :text="launchButtonText"></launch-button>
    <button v-if="isActiveActivity">Changer d'activité ?</button>
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
      isActiveActivity: false,
    };
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
#main-content {
  height: calc(100vh - 50px);
  width: 100vw;
}
</style>
