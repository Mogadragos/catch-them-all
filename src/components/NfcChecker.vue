<template>
  <div>
    <h1> Please wait </h1>
  </div>
</template>

<script>
export default {
  emits: ['NFCChecked'],
  mounted() {
    this.$emit('NFCChecked', ("NDEFReader" in window));
  }
}
</script>

<style>
div {
  display: flex;
  justify-content: center;
  align-items: center;
}

h1 {
  text-align: center;
}
</style>