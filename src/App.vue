<template>
  <head>
    <link rel="manifest" href="../manifest.json">
  </head>
  <header-help></header-help>
  <Admin></Admin>
  <app-content v-if="NfcChecked && NfcActive"></app-content>
  <section v-else-if="NfcChecked">No NFC</section>
  <section>
    <modal
      :show="showSettingsModal"
      :zIndex="150"
      @close="showSettingsModal = false"
    >
    </modal>
  </section>
</template>

<script>
import HeaderHelp from "./components/HeaderHelp";
import AppContent from "./components/AppContent";
import Modal from "./components/Modal";
import NFCService from "./services/NFCService.ts";
import Admin from "./components/Admin";

export default {
  name: "App",
  components: {
    HeaderHelp,
    AppContent,
    Modal,
    Admin,
  },
  data() {
    return {
      NfcChecked: true,
      NfcActive: true,
    };
  },
  mounted() {
    NFCService.Check().then((NfcActive) => {
      console.log(NfcActive);
      //this.NfcChecked = true;
      //this.NfcActive = NfcActive;
    });
  },
};
</script>

<style></style>
