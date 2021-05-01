<template>
  <transition name="modal">
    <div v-show="show" :style="cssVars" class="modal-mask">
      <div class="modal-container">
        <div class="modal-body">
          <slot name="body"> default body </slot>
        </div>

        <div v-if="isFooter" class="modal-footer">
          <slot name="footer">
            <button class="modal-close-button" v-on:click="$emit('close')">
              {{ closeText }}
            </button>
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    show: Boolean,
    isFooter: {
      type: Boolean,
      default: true,
    },
    zIndex: {
      type: Number,
      default: 9999,
    },
    closeText: {
      type: String,
      default: "Fermer",
    }
  },
  computed: {
    cssVars() {
      return {
        "--z-index": this.zIndex,
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
  width: 50%;
  max-width: 500px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  font-family: Helvetica, Arial, sans-serif;
}

.modal-body {
  margin: 20px 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-footer {
  width: 100%;
}

.modal-close-button {
  display: block;
  margin: auto;
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
