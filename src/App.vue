<template>
  <div>
    <Navbar />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
  import Navbar from './components/Navbar';
  import Footer from './components/Footer';

  export default {
    name: 'App',
    components: {
      Navbar,
      Footer
    },
  }
</script>


<style>
    html, body {
      background-color: #0E392C;
      margin: 0;
      padding: 0;
      height: auto;
    }

    *::-webkit-scrollbar {
      width: 5px;
    }

    *::-webkit-scrollbar-track {
      background: transparent;
    }

    *::-webkit-scrollbar-thumb {
      background-color: #EE4E1C;
      border-radius: 2px;
    }

</style>
