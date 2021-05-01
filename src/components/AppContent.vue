<template>
  <section id="main-content">
    NFC Ready
    <launch-button></launch-button>
  </section>
</template>

<script>
import LaunchButton from "./LaunchButton.vue";
//import NFCService from "../services/NFCService.ts";

export default {
  components: {
    LaunchButton,
  },
};
</script>

<style>
#main-content {
  height: calc(100vh - 50px);
  width: 100vw;
}
</style>
