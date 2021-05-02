<template>
  <button class="stylaxBtn">{{ showText }}</button>
</template>

<script>
export default {
  props: {
    showText: String,
  },
};
</script>

<style>
.stylaxBtn {
  display: block;
  padding: 20px 100px 18px 100px;
  color: white;
  font-family: arial;
  font-size: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
  background: rgb(255, 85, 85);
  border-radius: 10px;
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  margin-right: auto;
  margin-left: auto;
}

.stylaxBtn:active {
  transform: scale(1.025);
}
</style>
