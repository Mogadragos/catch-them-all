<template>
  <header>
    <button v-on:click="openSettings">
      <img src="../assets/img/settings.svg" alt="Settings" />
    </button>
  </header>
</template>

<script>
export default {
  methods: {
    openSettings() {
      console.log("open modal here");
      // TODO: open modal
    },
  },
};
</script>

<style scoped>
header {
  width: 100vw;
  height: 50px;
  background: linear-gradient(to bottom right, red, white);
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

button {
  background: none;
  border: none;
  cursor: pointer;
  width: 50px;
  height: 50px;
  margin-right: 20px;
}

img {
  width: 40px;
  height: 40px;
}
</style>
