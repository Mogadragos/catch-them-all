<template>
  <header-help @openSettings="showSettingsModal = true"></header-help>
  NFC {{ NfcActive ? "ok" : "pas ok" }}
  <section>
    <modal
      :show="showSettingsModal"
      :zIndex="150"
      @close="showSettingsModal = false"
    >
      <template v-slot:header>
        <h3>custom header</h3>
      </template>
    </modal>
  </section>
</template>

<script>
import Modal from "./Modal";
import HeaderHelp from "./HeaderHelp";

export default {
  components: {
    Modal,
    HeaderHelp,
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

<style></style>
