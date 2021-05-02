<template>
  <transition name="modal">
    <div v-if="show" :style="cssVars" class="modal-mask">
      <div class="modal-container">
        <div v-if="isHeader" class="modal-header">
          <slot name="header">
            {{ title }}
            <button class="modal-close-button" v-on:click="$emit('close')">
              {{ closeText }}
            </button>
          </slot>
        </div>
        <div class="modal-body">
          <slot name="body"> default body </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    show: Boolean,
    title: {
      type: String,
      default: "",
    },
    isHeader: {
      type: Boolean,
      default: true,
    },
    zIndex: {
      type: Number,
      default: 9999,
    },
    width: {
      type: String,
      default: "50%",
    },
    maxWidth: {
      type: String,
      default: "500px",
    },
    height: {
      type: String,
      default: "auto",
    },
    headerMarginY: {
      type: String,
      default: "0",
    },
    closeText: {
      type: String,
      default: "Fermer",
    },
  },
  computed: {
    cssVars() {
      return {
        "--z-index": this.zIndex,
        "--width": this.width,
        "--max-width": this.maxWidth,
        "--height": this.height,
        "--header-margin-y": this.headerMarginY,
      };
    },
  },
};
</script>

<style>
.modal-mask {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: var(--z-index);
}

.modal-container {
  width: var(--width);
  max-width: var(--max-width);
  height: var(--height);
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  font-family: Helvetica, Arial, sans-serif;
}

.modal-body {
  margin: 20px 0;
}

.modal-header {
  width: 100%;
  margin-top: var(--header-margin-y);
  margin-bottom: var(--header-margin-y);
}

.modal-close-button {
  display: block;
  margin-left: auto;
}

/* Transitions (vueJS) */

.modal-enter-active {
  animation: show-in 0.5s;
}
.modal-leave-active {
  animation: show-in 0.5s reverse;
}
@keyframes show-in {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
