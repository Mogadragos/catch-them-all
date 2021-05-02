<template>
  <modal :show="chip !== null" :isHeader="true" @close="$emit('close')">
    <template v-slot:body>
      <div class="unique-chip">
        <h3>{{ chip.label }}</h3>
        <img
          v-if="!imgError"
          v-bind:src="chip.link"
          v-bind:alt="chip.label"
          v-on:error="imgError = true"
        />
        <a v-else v-bind:href="chip.link">{{ chip.link }}</a>
      </div>
    </template>
  </modal>
</template>

<script>
import Modal from "./Modal.vue";

export default {
  components: {
    Modal,
  },
  data() {
    return {
      imgError: false,
    };
  },
  props: {
    chip: Object,
  },
  created() {
    this.$watch("chip", (newVal) => {
      if (newVal) {
        this.imgError = false;
      }
    });
  },
};
</script>

<style>
.unique-chip {
  width: 100%;
}
.unique-chip > h3 {
  text-align: center;
}
.unique-chip > img,
.unique-chip > a {
  display: block;
  text-align: center;
  width: 100%;
  max-height: 100%;
}
</style>
