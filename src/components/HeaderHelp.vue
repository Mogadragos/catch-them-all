<template>
  <params-menu
    :show="showSettings"
    :transitionTime="transitionTime"
  ></params-menu>
  <header>
    <button v-on:click="toggleParams">
      <img
        src="../assets/img/settings.svg"
        alt="Settings"
        :style="cssVars"
        v-bind:class="{ rotate: showSettings }"
      />
    </button>
  </header>
</template>

<script>
import ParamsMenu from "./ParamsMenu.vue";
export default {
  components: { ParamsMenu },
  data() {
    return {
      showSettings: false,
      transitionTime: ".5s",
    };
  },
  methods: {
    toggleParams() {
      this.showSettings = !this.showSettings;
    },
  },
  computed: {
    cssVars() {
      return {
        "--transition-time": this.transitionTime,
      };
    },
  },
};
</script>

<style scoped>
header {
  position: relative;
  width: 100vw;
  height: 50px;
  background: linear-gradient(to bottom right, red, white);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 10;
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
  transition: transform var(--transition-time) ease-in;
}

/* Transitions (vueJS) */

.rotate {
  transform: rotate(-270deg);
}
</style>
