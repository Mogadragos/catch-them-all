<template>
  <nfc-checker
    v-if="!NfcChecked"
    @NFCChecked="displayMainContent"
  ></nfc-checker>
  <app-content v-else :NfcActive="NfcActive"></app-content>
</template>

<script>
import NfcChecker from "./components/NfcChecker";
import AppContent from "./components/AppContent";

export default {
  name: "App",
  components: {
    NfcChecker,
    AppContent,
  },
  data() {
    return {
      NfcChecked: false,
      NfcActive: false,
    };
  },
  methods: {
    displayMainContent(value) {
      this.NfcChecked = true;
      this.NfcActive = value;
    },
  },
};
</script>

<style></style>
