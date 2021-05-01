<template>
  <div class="center">
    <button class="LauchnBtn">{{ text }}</button>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "LAUNCH",
    },
  },
};
</script>

<style>
.LauchnBtn {
  border-radius: 50%;
  position: relative;
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
  z-index: 0;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);
}

.center {
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
}
</style>
