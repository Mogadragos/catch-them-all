<template>
  <div>
    <h1>Please wait</h1>
  </div>
</template>

<script>
/*global NDEFReader*/

export default {
  emits: ["NFCChecked"],
  methods: {
    check: async function () {
      if ("NDEFReader" in window) {
        console.log("NFC présent");
      } else {
        console.log("NFC indisponible");
      }
    },
    read: async function () {
      if ("NDEFReader" in window) {
        const ndef = new NDEFReader(); // obj for interaction with NFC
        return new Promise((resolve, reject) => {
          const ctlr = new AbortController();
          ctlr.signal.onabort = reject;
          ndef.addEventListener(
            "reading",
            (event) => {
              ctlr.abort();
              resolve(event);
            },
            { once: true }
          );
          ndef.scan({ signal: ctlr.signal }).catch((err) => reject(err));
        });
      }
    },
    readLauch: function () {
      this.read().then(({ serialNumber }) => {
        console.log(serialNumber);
      });
    },
  },
  mounted() {
    this.$emit("NFCChecked", "NDEFReader" in window);
  },
};
</script>

<style scoped>
div {
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  text-align: center;
}
</style>
