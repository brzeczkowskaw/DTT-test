<template>
  <div class="header">
    <h3 class="header-text">{{ text }}</h3>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Footer",
  props: {
    text: String,
  },
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Khand:wght@300&display=swap");

.header {
  padding-top: 1em;
  width: 100%;
  display: flex;
  justify-content: center;
}

.header-text {
  padding-top: 5rem;
  font-family: "Khand", sans-serif;
  text-align: center;
  align-items: center;
  letter-spacing: 0.05em;
  color: #df7e5f;
  font-size: 1.8em;
  line-height: 1.5em;
}

@media (max-width: 800px) {
  .header-text {
    overflow-wrap: break-word;
    font-size: 1.2em;
  }

  .header-text {
    white-space: none;
  }
}
</style>
