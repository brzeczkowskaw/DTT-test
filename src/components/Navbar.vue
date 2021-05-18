<template>
    <div class="navbar">
        <ul class="list">
            <li class="link"><router-link to="/">Home</router-link></li>
            <li class="link"><router-link to="/categories">Categories</router-link></li>
            <li class="link"><router-link to="/random" @click="getRandomMeal()">Random Meal</router-link></li>
        </ul>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "Navbar",
          data() {
    return {
        randomHeader: 'Random meal',
        randomPhoto: '',
        randomName: '',
        randomButton: 'Get next one',
    };
  },
  methods: {
    async getRandomMeal() {
        const res = await fetch("https://themealdb.p.rapidapi.com/random.php", {
          "method": "GET",
          "headers": {
            "x-rapidapi-key": "93f974e090msh8c4227984a67af3p1f59dajsn266a08d9587b",
            "x-rapidapi-host": "themealdb.p.rapidapi.com",
          }
        })
        const results  = await res.json();
        const meal = JSON.stringify(results);
        const newmeal = JSON.parse(meal);
        
        this.randomPhoto = newmeal.meals[0].strMealThumb;
        this.randomName = newmeal.meals[0].strMeal;
        this.randomId = newmeal.meals[0].idMeal;
    }
  }
    });
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
    .navbar {
        height: 6em;
        width: 100%;
        background-color: #0e392ce7;
        position: fixed;
        margin-top: 0;
        padding: 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-bottom: 0.5em;
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
        font-family: 'Bebas Neue', cursive;
        letter-spacing: 0.1em;
        color: #EE4E1C;
        font-size: 2.5em;
    }

    .link:hover {
        transform: scale(0.9);
    }

    a {
        text-decoration: none; 
        color: #EE4E1C;
    }
</style>