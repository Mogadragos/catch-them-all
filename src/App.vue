<template>
  <header-help></header-help>
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

export default {
  name: "App",
  components: {
    HeaderHelp,
    AppContent,
    Modal,
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
