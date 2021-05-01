<template>
  <modal
    :show="show"
    :isHeader="true"
    :width="'100%'"
    :maxWidth="'none'"
    :height="'100%'"
    :headerMarginY="'30px'"
    @close="$emit('close')"
  >
    <template v-slot:body>
      <div class="chip" v-for="chip in activeChips" v-bind:key="chip.id">
        <h3>{{ chip.label }}</h3>
        <img v-if="!chip.imgError" v-bind:src="chip.link" v-bind:alt="chip.label" v-on:error="chip.imgError = true"/>
        <a v-else v-bind:href="chip.link">{{ chip.link }}</a>
      </div>
    </template>
  </modal>
</template>

<script>
import StorageService from "../services/StorageService.js";
import Modal from "./Modal.vue";

export default {
  components: {
    Modal,
  },
  data() {
    return {
      activeChips: [],
    };
  },
  props: {
    show: Boolean,
  },
  created() {
    this.$watch("show", (newVal) => {
      if (newVal) {
        this.activeChips = StorageService.getActiveChips();
      }
    });
  },
};
</script>

<style>

.chip {
  margin: auto;
  max-width: 75%;
  max-height: 200px;
  margin-bottom: 20px;
}
.chip > h3 {
  text-align: center;
}
.chip > img, .chip > a {
  display: block;
  text-align: center;
  max-width: 100%;
  max-height: 100%;
}
</style>
