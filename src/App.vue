<template>
  <app-content v-if="NfcChecked" :NfcActive="NfcActive"></app-content>
</template>

<script>
import AppContent from "./components/AppContent";
import NFCService from "./services/NFCService.ts";

export default {
  name: "App",
  components: {
    AppContent,
  },
  data() {
    return {
      NfcChecked: false,
      NfcActive: false,
    };
  },
  mounted() {
    NFCService.Check().then((NfcActive) => {
      this.NfcChecked = true;
      this.NfcActive = NfcActive;
    });
  },
};
</script>

<style></style>
