<template>
  <div class="navbar">
    <ul class="list">
      <li class="link"><router-link to="/">Home</router-link></li>
      <li class="link categories">
        <router-link to="/">Categories</router-link>
        <ul>
          <li>
            <router-link class="dropdown-link" to="/">Home</router-link>
          </li>
          <li>
            <router-link class="dropdown-link" to="/random"
              >Random Meal</router-link
            >
          </li>
          <li>
            <a
              class="dropdown-link"
              href="https://brzeczkowskaw.netlify.app/#/"
              target="_blank"
              >Author</a
            >
          </li>
        </ul>
      </li>
      <li class="link"><router-link to="/random">Random Meal</router-link></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Navbar",
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap");
.navbar {
  height: 6em;
  width: 100%;
  background-color: #0e392c;
  position: fixed;
  margin-top: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 0.5em;
  z-index: 1;
}

ul {
  padding: 0;
}

ul > li {
  float: left;
  list-style: none;
  position: relative;
}

.dropdown-link {
  padding: 10px 20px;
  text-decoration: none;
  display: block;
  font-size: 1em;
}

.dropdown-link:hover {
  transform: scale(0.9);
}

ul > li ul {
  padding: 0;
  position: absolute;
  display: none;
  left: 0px;
  top: 3rem;
  width: 18rem;
  text-align: left;
  background-color: #0e392c;
  border: 1px solid #ee4e1c;
  border-radius: 10px;
}

ul li:hover > ul {
  display: block;
}

ul > li ul ul {
  left: 200px;
  top: -1px;
}

ul > li ul li {
  margin: 0;
  padding: 0;
  position: relative;
  float: none;
  height: auto;
}

.list {
  display: flex;
  flex-direction: row;
  text-decoration: none;
  list-style-type: none;
  justify-content: space-between;
  gap: 4.5em;
}

.link {
  text-decoration: none !important;
  font-family: "Bebas Neue", cursive;
  letter-spacing: 0.1em;
  color: #ee4e1c;
  font-size: 2.5em;
}

.link:hover {
  transform: scale(0.9);
}

a {
  text-decoration: none;
  color: #ee4e1c;
  font-size: 1em;
}

@media (min-width: 501px) and (max-width: 800px) {
  .link {
    font-size: 1.4em;
  }

  .list {
    gap: 0.8em;
    width: 100%;
    justify-content: space-evenly;
  }
}

@media (min-width: 381px) and (max-width: 500px) {
  .link {
    font-size: 1.2em;
  }

  .list {
    gap: 2em;
    width: 100%;
    justify-content: space-evenly;
  }
}

@media (max-width: 380px) {
  .link {
    font-size: 1em;
  }

  .list {
    gap: 1em;
    width: 100%;
    justify-content: space-evenly;
  }

  ul > li ul {
    width: 10rem;
  }
}
</style>
