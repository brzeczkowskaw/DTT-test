<template>
    <div>
        <Header :text=randomHeader />
        <RandomPicture :picSrc=randomPhoto :picAlt=randomName />
        <Title :text=randomName />
        <Button :btnText=randomButton @click="getMeal()" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from '../components/Header.vue';
import RandomPicture from '../components/RandomPicture.vue';
import Title from '../components/Title.vue';
import Button from '../components/Button.vue';

export default defineComponent({
  name: "Random",
  components: {
      Header,
      RandomPicture,
      Title, 
      Button,
  },
  data() {
    return {
        randomHeader: 'Random meal',
        randomPhoto: '',
        randomName: '',
        randomButton: 'Get next one',
        randomId: '',
    };
  },
  methods: {
    async getMeal() {
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
