<template>
  <div>
    <Navbar />
    <router-view :key="$route.fullPath"></router-view>
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style>
html,
body {
  background-color: #0e392c;
  margin: 0;
  padding: 0;
  height: auto;
  max-width: 100%;
}

*::-webkit-scrollbar {
  width: 5px;
}

*::-webkit-scrollbar-track {
  background: transparent;
}

*::-webkit-scrollbar-thumb {
  background-color: #ee4e1c;
  border-radius: 2px;
}
</style>
