<template>
  <div class="header">
    <h3 class="header-text" style="white-space: pre">{{ text }}</h3>
  </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "Title",
        props: {
            text: String,
        }
    });
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Khand:wght@300&display=swap');

    .header {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .header-text {
        font-family: 'Khand', sans-serif;
        text-align: center;
        align-items: center;
        letter-spacing: 0.05em;
        color: #DF7E5F;
        font-size: 1.5em;
        line-height: 1.5em;
    }
</style>