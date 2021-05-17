<template>
    <footer class="footer">
        <div class="left-column">
            <ul class="list">
                <li class="title">Go to</li>
                <li class="link"><router-link to="/">Home</router-link></li>
                <li class="link"><router-link to="/categories">Categories</router-link></li>
                <li class="link"><router-link to="/random">Random Meal</router-link></li>
            </ul>
        </div>
        <div class="right-column">
            <ul class="list">
                <li class="title">Created with &#10084; by</li>
                <a class="link" href="https://brzeczkowskaw.netlify.app/#/">Weronika</a>
            </ul>
        </div>
    </footer>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "Footer",
    });
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Khand:wght@300&display=swap');

    .footer {
        /* position: absolute; */
		bottom: 0;
		width: 100%;
		height: 8.5em;
        background-color: rgba(26, 90, 71, 0.3);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: start;
        margin-top: 2em;
    }

    .list { 
        text-decoration: none;
        list-style-type: none;
    }

    .left-column {
        font-family: 'Khand', sans-serif;
        text-decoration: none;
    }

    .right-column {
        font-family: 'Khand', sans-serif;
        text-decoration: none;
        padding-right: 2em;
    }

    .title {
        font-weight: bold;
        color: #EE4E1C;
    }

    a {
        text-decoration: none; 
        color: #EE4E1C;
    }
</style>