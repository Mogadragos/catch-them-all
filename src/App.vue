<template>
  <nfc-checker @NFCChecked="toggleMainContent"></nfc-checker>
</template>

<script>
import NfcChecker from './components/NfcChecker';

export default {
  name: "App",
  components: {
    NfcChecker,
  },
  methods: {
    toggleMainContent(value) {
      console.log(value);
    }
  }
};
</script>

<style>
</style>
