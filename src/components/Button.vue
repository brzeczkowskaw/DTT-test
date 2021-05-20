<template>
  <div class="btn-area">
    <button class="btn">{{ btnText }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Button",
  props: {
    btnText: String,
  },
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Khand:wght@300&display=swap");

.btn-area {
  display: flex;
  justify-content: center;
}

.btn {
  height: 2.8em;
  width: 14em;
  cursor: pointer;
  display: inline-block;
  background-color: #ee4e1c;
  border-radius: 10px;
  font-size: 1.8em;
  font-family: "Khand", sans-serif;
  border-color: #ee4e1c;
  border: 0;
  letter-spacing: 0.05em;
}
.btn:focus {
  outline: none;
}

.btn:hover {
  transform: scale(0.96);
}

@media (max-width: 700px) {
  .btn {
    width: 8em;
    height: 2.3em;
  }
}
</style>
