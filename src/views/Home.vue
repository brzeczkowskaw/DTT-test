<template>
  <div>
    <Header :text=headerText />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from '../components/Header.vue';

export default defineComponent({
  name: "Home",
  components: {
    Header,
  },
  data() {
    return {
      headerText: `No ideas what to cook for dinner?
Try our recepies randomizer 
to find the inspiration
for your next meal!
Enjoy!`,
    };
  },
});
</script>

<style scoped>

</style>
