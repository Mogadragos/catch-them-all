<template>
  <transition name="topSlider">
    <section v-show="show" class="params-menu">
      <section class="params-menu-body">
        <button>A</button>
        <button>B</button>
        <button>C</button>
        <button>D</button>
        <button>E</button>
      </section>
    </section>
  </transition>
</template>

<script>
export default {
  props: {
    show: Boolean,
  },
};
</script>

<style>
.params-menu {
  display: flex;
  justify-content: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
  transition: transform 1s;
}

.params-menu-body {
  width: 80%;
  height: 90%;
  background-color: green;
}

/* Transitions (vueJS) */

.topSlider-enter,
.topSlider-leave-to {
  transform: translateY(-100%);
}
</style>
