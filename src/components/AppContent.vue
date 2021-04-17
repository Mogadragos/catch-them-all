<template>
    NFC {{ NfcActive ? 'ok': 'pas ok' }}
</template>

<script>
export default {
  prop: {
    NfcActive: Boolean
  }
}
</script>

<style>

</style>