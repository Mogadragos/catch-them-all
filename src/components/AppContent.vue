<template>
  <header-help></header-help>
  NFC {{ NfcActive ? "ok" : "pas ok" }}
</template>

<script>
import HeaderHelp from "./HeaderHelp";

export default {
  components: {
    HeaderHelp,
  },
  prop: {
    NfcActive: Boolean,
  },
};
</script>

<style></style>
