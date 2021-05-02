<template>
  <modal :show="show" :isHeader="true" @close="$emit('close')" :width="'80%'">
    <template v-slot:body>
      <section id="map-section">
        <div class="radar"></div>
        <div>
          <div v-for="chip in chips" v-bind:key="chip.id">
            {{ chip.label }} : {{ chip.distance }} mètres
          </div>
        </div>
      </section>
    </template>
  </modal>
</template>

<script>
import GeolocService from "../services/GeolocService.js";
import StorageService from "../services/StorageService.js";
import Modal from "./Modal.vue";

export default {
  emits: ["close"],
  components: { Modal },
  props: {
    show: Boolean,
  },
  data() {
    return {
      location: "",
      chips: StorageService.getUndiscoveredChips(),
    };
  },
  mounted() {
    GeolocService.watchLocation(this.locationCallback);
  },
  methods: {
    locationCallback(location) {
      this.location = location.coords;
      for (const chip of this.chips) {
        chip.distance = Math.round(GeolocService.getDistanceFromLatLonInM(this.location, chip.location) * 100)/100;
      }
    },
  },
};
</script>

<style>
#map-section {
  display: flex;
  align-items: center;
}

.radar {
  background: -webkit-radial-gradient(
      center,
      rgba(0, 0, 0, 0.3) 50%,
      rgba(233, 40, 35, 0.6) 75%
    ),
    -webkit-repeating-radial-gradient(rgba(32, 255, 77, 0) 5.8%, rgba(
            32,
            255,
            77,
            0
          )
          18%, #841413 18.6%, rgba(32, 255, 77, 0) 18.9%),
    -webkit-linear-gradient(90deg, rgba(32, 255, 77, 0) 49.5%, #841413 50%, #841413
          50%, rgba(32, 255, 77, 0) 50.2%),
    -webkit-linear-gradient(0deg, rgba(32, 255, 77, 0) 49.5%, #841413 50%, #841413
          50%, rgba(32, 255, 77, 0) 50.2%);
  background: radial-gradient(
      center,
      rgba(0, 0, 0, 0.3) 50%,
      rgba(233, 40, 35, 0.6) 75%
    ),
    repeating-radial-gradient(
      rgba(32, 255, 77, 0) 5.8%,
      rgba(32, 255, 77, 0) 18%,
      #841413 18.6%,
      rgba(32, 255, 77, 0) 18.9%
    ),
    linear-gradient(
      90deg,
      rgba(32, 255, 77, 0) 49.5%,
      #841413 50%,
      #841413 50%,
      rgba(32, 255, 77, 0) 50.2%
    ),
    linear-gradient(
      0deg,
      rgba(32, 255, 77, 0) 49.5%,
      #841413 50%,
      #841413 50%,
      rgba(32, 255, 77, 0) 50.2%
    );
  min-width: 150px;
  width: 150px;
  min-height: 150px;
  height: 150px;
  border-radius: 50%;
  border: 1px solid #841413;
  overflow: hidden;
}
.radar:before {
  content: " ";
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.radar:after {
  content: " ";
  display: block;
  background-image: linear-gradient(
    44deg,
    rgba(0, 255, 51, 0) 50%,
    #841413 100%
  );
  width: 50%;
  height: 50%;
  animation: radar-beam 5s infinite;
  animation-timing-function: linear;
  transform-origin: bottom right;
  border-radius: 100% 0 0 0;
}

@keyframes radar-beam {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
