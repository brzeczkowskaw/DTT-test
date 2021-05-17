<template>
    <div class="navbar">
        <ul class="list">
            <li class="link"><router-link to="/">Home</router-link></li>
            <li class="link"><router-link to="/categories">Categories</router-link></li>
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