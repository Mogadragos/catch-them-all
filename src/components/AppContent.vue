<template>
  <header-help></header-help>
  <section id="main-content">
    <section v-if="NfcActive">
      NFC Ready
      <launch-button></launch-button>
    </section>
    <section v-else>No NFC</section>
  </section>
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
import Modal from "./Modal";
import HeaderHelp from "./HeaderHelp";
import LaunchButton from "./LaunchButton.vue";
//import NFCService from "../services/NFCService.ts";

export default {
  components: {
    Modal,
    HeaderHelp,
    LaunchButton,
  },
  props: {
    NfcActive: Boolean,
  },
  data() {
    return {
      showSettingsModal: false,
    };
  },
};
</script>

<style>
#main-content {
  height: calc(100vh - 50px);
  width: 100vw;
}
</style>
