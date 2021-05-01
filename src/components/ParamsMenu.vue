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
  overflow: hidden;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 50px;
  width: 100vw;
  height: 100vh;
}

.params-menu-body {
  width: 80%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

/* Transitions (vueJS) */

.topSlider-enter-active {
  animation: show-in 0.5s;
}
.topSlider-leave-active {
  animation: show-in 0.5s reverse;
}
@keyframes show-in {
  0% {
    height: 0;
  }
  100% {
    height: 100vh;
  }
}
</style>
