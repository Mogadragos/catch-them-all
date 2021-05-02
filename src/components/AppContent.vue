<template>
  <section id="main-content">
    <launch-button
      v-if="!activityStart"
      @StartActivity="activityStart = true"
    ></launch-button>
    <activity-content v-else></activity-content>
  </section>
</template>

<script>
import LaunchButton from "./LaunchButton.vue";
import ActivityContent from "./ActivityContent.vue";

export default {
  components: {
    LaunchButton,
    ActivityContent,
  },
  data() {
    return {
      activityStart: false,
    };
  },
};
</script>

<style>
#main-content {
  height: calc(100vh - 50px);
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
