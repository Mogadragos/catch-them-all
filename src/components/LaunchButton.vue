<template>
  <button class="LauchnBtn" v-on:click="LaunchActivity">{{ text }}</button>
  <button v-if="isActiveActivity" v-on:click="$emit(ScanNFC)">
    Changer d'activité ?
  </button>
</template>

<script>
export default {
  emits: ["ScanNFC", "LoadActive"],
  props: {
    text: {
      type: String,
      default: "LAUNCH",
    },
    isActiveActivity: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    LaunchActivity() {
      if (this.isActiveActivity) {
        this.$emit("LoadActive");
      } else {
        this.$emit("ScanNFC");
      }
    },
  },
};
</script>

<style>
.LauchnBtn {
  border-radius: 50%;
  margin: 0;
  padding: 5px 12px;
  height: 300px;
  width: 300px;
  outline: none;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  background-color: #ffffff;
  border: 1px solid rgba(22, 76, 167, 0.6);
  color: #1d89ff;
  font-weight: 400;
  font-size: 20px;
  font-family: inherit;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);
}
</style>
