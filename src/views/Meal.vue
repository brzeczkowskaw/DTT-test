<template>
    <RandomPicture :picSrc=mealPhoto :picAlt=mealName />
</template>

<script lang="ts">
    import { defineComponent } from "vue";
    import RandomPicture from '../components/RandomPicture.vue';

    export default defineComponent({
        name: "Meal", 
        components: {
            RandomPicture,
        },
        data() {
            return { 
                mealPhoto: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.eatwell101.com%2Fcreamy-chicken-soup-recipe&psig=AOvVaw20cayc7ss7tRTwKKxsyxdV&ust=1621460725123000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDrg4ea1PACFQAAAAAdAAAAABAD',
                mealName: 'name',
                mealId: this.$route.params.id,
            }
        },
        methods: {
            async getThisMeal() {
                const res = await fetch("https://themealdb.p.rapidapi.com/lookup.php?i=" + this.mealId, {
	                "method": "GET",
	                "headers": {
		                "x-rapidapi-key": "93f974e090msh8c4227984a67af3p1f59dajsn266a08d9587b",
		                "x-rapidapi-host": "themealdb.p.rapidapi.com"
	                }
                })
                const results  = await res.json();
                const meal = JSON.stringify(results);
                const newmeal = JSON.parse(meal);

                this.mealPhoto = newmeal.meals[0].strMealThumb;
                this.mealName = newmeal.meals[0].strMeal;
            }
        },
        beforeMount() {
            this.getThisMeal();
        }
    })
</script>