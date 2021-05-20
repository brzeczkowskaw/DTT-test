<template>
  <div class="picture-area">
    <img class="picture" v-bind:src="picGrSrc" v-bind:alt="picGrAlt" />
    <div class="name">{{ picGrAlt }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "GroupPicture",
  props: {
    picGrSrc: String,
    picGrAlt: String,
  },
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");

.picture-area {
  display: flex;
  justify-content: center;
  /* width: 25em; */
  margin: 2em;
}

.picture {
  height: 25em;
  width: 25em;
  border-radius: 30px;
}

.name {
  font-family: "Bebas Neue", cursive;
  letter-spacing: 0.1em;
  text-align: center;
  font-size: 2.8em;
  width: 6em;
  height: 7em;
}

.picture-area .name {
  visibility: hidden;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 9em;
  height: 9em;
  background-color: #882335d8;
  border-radius: 30px;
  cursor: pointer;
}

.picture-area:hover .name {
  visibility: visible;
  color: black;
}

@media (max-width: 400px) {
  .picture {
    height: 12em;
    width: 12em;
  }

  .picture-area {
    width: 10em;
  }

  .picture-area .name {
    width: 5em;
  }
}

@media (min-width: 401px) and (max-width: 450px) {
  .picture {
    height: 15em;
    width: 15em;
  }

  .picture-area {
    width: 15em;
  }
}
</style>
