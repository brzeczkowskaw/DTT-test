<template>
  <div class="meal-container">
    <Header :text="mealName" />
    <div class="ingredients">
      <RandomPicture :picSrc="mealPhoto" :picAlt="mealName" />
      <div class="ingredients-table">
        <Title text="Ingredients" />
        <table class="table">
          <tr>
            <td class="measure">{{ measure1 }}</td>
            <td class="ingr">{{ ingredient1 }}</td>
          </tr>
          <tr>
            <td class="measure">{{ measure2 }}</td>
            <td class="ingr">{{ ingredient2 }}</td>
          </tr>
          <tr>
            <td class="measure">{{ measure3 }}</td>
            <td class="ingr">{{ ingredient3 }}</td>
          </tr>
          <tr>
            <td class="measure">{{ measure4 }}</td>
            <td class="ingr">{{ ingredient4 }}</td>
          </tr>
          <tr>
            <td class="measure">{{ measure5 }}</td>
            <td class="ingr">{{ ingredient5 }}</td>
          </tr>
          <tr>
            <td class="measure">{{ measure6 }}</td>
            <td class="ingr">{{ ingredient6 }}</td>
          </tr>
          <tr>
            <td class="measure">{{ measure7 }}</td>
            <td class="ingr">{{ ingredient7 }}</td>
          </tr>
          <tr>
            <td class="measure">{{ measure8 }}</td>
            <td class="ingr">{{ ingredient8 }}</td>
          </tr>
          <tr>
            <td class="measure">{{ measure9 }}</td>
            <td class="ingr">{{ ingredient9 }}</td>
          </tr>
          <tr>
            <td class="measure">{{ measure10 }}</td>
            <td class="ingr">{{ ingredient10 }}</td>
          </tr>
          <tr>
            <td class="measure">{{ measure11 }}</td>
            <td class="ingr">{{ ingredient11 }}</td>
          </tr>
          <tr>
            <td class="measure">{{ measure12 }}</td>
            <td class="ingr">{{ ingredient12 }}</td>
          </tr>
          <tr>
            <td class="measure">{{ measure13 }}</td>
            <td class="ingr">{{ ingredient13 }}</td>
          </tr>
          <tr>
            <td class="measure">{{ measure14 }}</td>
            <td class="ingr">{{ ingredient14 }}</td>
          </tr>
          <tr>
            <td class="measure">{{ measure15 }}</td>
            <td class="ingr">{{ ingredient15 }}</td>
          </tr>
          <tr>
            <td class="measure">{{ measure16 }}</td>
            <td class="ingr">{{ ingredient16 }}</td>
          </tr>
          <tr>
            <td class="measure">{{ measure17 }}</td>
            <td class="ingr">{{ ingredient17 }}</td>
          </tr>
          <tr>
            <td class="measure">{{ measure18 }}</td>
            <td class="ingr">{{ ingredient18 }}</td>
          </tr>
          <tr>
            <td class="measure">{{ measure19 }}</td>
            <td class="ingr">{{ ingredient19 }}</td>
          </tr>
          <tr>
            <td class="measure">{{ measure20 }}</td>
            <td class="ingr">{{ ingredient20 }}</td>
          </tr>
          <tr>
            <td class="measure">{{ measure21 }}</td>
            <td class="ingr">{{ ingredient21 }}</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="preparation">
      <Title text="Preparation" />
      <p class="text">{{ preparation }}</p>
    </div>
    <div class="similar">
      <Title :text="'Other ' + category + ' meals suggestions'" />
      <div class="pics-container">
        <router-link v-bind:to="'/meal/' + category + '/' + categoryId0"
          ><GroupPicture :picGrSrc="categoryPicture0" :picGrAlt="categoryName0"
        /></router-link>
        <router-link v-bind:to="'/meal/' + category + '/' + categoryId1"
          ><GroupPicture :picGrSrc="categoryPicture1" :picGrAlt="categoryName1"
        /></router-link>
        <router-link v-bind:to="'/meal/' + category + '/' + categoryId2"
          ><GroupPicture :picGrSrc="categoryPicture2" :picGrAlt="categoryName2"
        /></router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RandomPicture from "../components/RandomPicture.vue";
import Title from "../components/Title.vue";
import Header from "../components/Header.vue";
import GroupPicture from "../components/GroupPicture.vue";

export default defineComponent({
  name: "Meal",
  components: {
    RandomPicture,
    Title,
    Header,
    GroupPicture,
  },
  data() {
    return {
      mealPhoto: "",
      mealName: "",
      category: this.$route.params.category,
      mealId: this.$route.params.id,
      ingredient1: "",
      ingredient2: "",
      ingredient3: "",
      ingredient4: "",
      ingredient5: "",
      ingredient6: "",
      ingredient7: "",
      ingredient8: "",
      ingredient9: "",
      ingredient10: "",
      ingredient11: "",
      ingredient12: "",
      ingredient13: "",
      ingredient14: "",
      ingredient15: "",
      ingredient16: "",
      ingredient17: "",
      ingredient18: "",
      ingredient19: "",
      ingredient20: "",
      ingredient21: "",
      measure1: "",
      measure2: "",
      measure3: "",
      measure4: "",
      measure5: "",
      measure6: "",
      measure7: "",
      measure8: "",
      measure9: "",
      measure10: "",
      measure11: "",
      measure12: "",
      measure13: "",
      measure14: "",
      measure15: "",
      measure16: "",
      measure17: "",
      measure18: "",
      measure19: "",
      measure20: "",
      measure21: "",
      preparation: "",
      categoryId0: "",
      categoryId1: "",
      categoryId2: "",
      categoryName0: "",
      categoryName1: "",
      categoryName2: "",
      categoryPicture0: "",
      categoryPicture1: "",
      categoryPicture2: "",
    };
  },
  methods: {
    async getThisMeal() {
      const res = await fetch(
        "https://themealdb.p.rapidapi.com/lookup.php?i=" + this.mealId,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "93f974e090msh8c4227984a67af3p1f59dajsn266a08d9587b",
            "x-rapidapi-host": "themealdb.p.rapidapi.com",
          },
        }
      );
      const results = await res.json();
      const meal = JSON.stringify(results);
      const newmeal = JSON.parse(meal);

      this.mealPhoto = newmeal.meals[0].strMealThumb;
      this.mealName = newmeal.meals[0].strMeal;
      this.ingredient1 = newmeal.meals[0].strIngredient1;
      this.ingredient2 = newmeal.meals[0].strIngredient2;
      this.ingredient3 = newmeal.meals[0].strIngredient3;
      this.ingredient4 = newmeal.meals[0].strIngredient4;
      this.ingredient5 = newmeal.meals[0].strIngredient5;
      this.ingredient6 = newmeal.meals[0].strIngredient6;
      this.ingredient7 = newmeal.meals[0].strIngredient7;
      this.ingredient8 = newmeal.meals[0].strIngredient8;
      this.ingredient9 = newmeal.meals[0].strIngredient9;
      this.ingredient10 = newmeal.meals[0].strIngredient10;
      this.ingredient11 = newmeal.meals[0].strIngredient11;
      this.ingredient12 = newmeal.meals[0].strIngredient12;
      this.ingredient13 = newmeal.meals[0].strIngredient13;
      this.ingredient14 = newmeal.meals[0].strIngredient14;
      this.ingredient15 = newmeal.meals[0].strIngredient15;
      this.ingredient16 = newmeal.meals[0].strIngredient16;
      this.ingredient17 = newmeal.meals[0].strIngredient17;
      this.ingredient18 = newmeal.meals[0].strIngredient18;
      this.ingredient19 = newmeal.meals[0].strIngredient19;
      this.ingredient20 = newmeal.meals[0].strIngredient20;
      this.ingredient21 = newmeal.meals[0].strIngredient21;
      this.measure1 = newmeal.meals[0].strMeasure1;
      this.measure2 = newmeal.meals[0].strMeasure2;
      this.measure3 = newmeal.meals[0].strMeasure3;
      this.measure4 = newmeal.meals[0].strMeasure4;
      this.measure5 = newmeal.meals[0].strMeasure5;
      this.measure6 = newmeal.meals[0].strMeasure6;
      this.measure7 = newmeal.meals[0].strMeasure7;
      this.measure8 = newmeal.meals[0].strMeasure8;
      this.measure9 = newmeal.meals[0].strMeasure9;
      this.measure10 = newmeal.meals[0].strMeasure10;
      this.measure11 = newmeal.meals[0].strMeasure11;
      this.measure12 = newmeal.meals[0].strMeasure12;
      this.measure13 = newmeal.meals[0].strMeasure13;
      this.measure14 = newmeal.meals[0].strMeasure14;
      this.measure15 = newmeal.meals[0].strMeasure15;
      this.measure16 = newmeal.meals[0].strMeasure16;
      this.measure17 = newmeal.meals[0].strMeasure17;
      this.measure18 = newmeal.meals[0].strMeasure18;
      this.measure19 = newmeal.meals[0].strMeasure19;
      this.measure20 = newmeal.meals[0].strMeasure20;
      this.measure21 = newmeal.meals[0].strMeasure21;
      this.preparation = newmeal.meals[0].strInstructions;
    },
    async getSimilar() {
      const res = await fetch(
        "https://themealdb.p.rapidapi.com/filter.php?c=" + this.category,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "93f974e090msh8c4227984a67af3p1f59dajsn266a08d9587b",
            "x-rapidapi-host": "themealdb.p.rapidapi.com",
          },
        }
      );
      const results = await res.json();
      const meal = JSON.stringify(results);
      const meals = JSON.parse(meal);

      const random1 = Math.floor(Math.random() * 10 + 1);
      const random2 = Math.floor(Math.random() * 10 + 2);
      const random3 = Math.floor(Math.random() * 10 + 3);

      this.categoryId0 = meals.meals[random1].idMeal;
      this.categoryPicture0 = meals.meals[random1].strMealThumb;
      this.categoryName0 = meals.meals[random1].strMeal;

      this.categoryId1 = meals.meals[random2].idMeal;
      this.categoryPicture1 = meals.meals[random2].strMealThumb;
      this.categoryName1 = meals.meals[random2].strMeal;

      this.categoryId2 = meals.meals[random3].idMeal;
      this.categoryPicture2 = meals.meals[random3].strMealThumb;
      this.categoryName2 = meals.meals[random3].strMeal;

      console.log(this.category);
    },
  },
  beforeMount() {
    this.getThisMeal();
    this.getSimilar();
  },
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Khand:wght@300&display=swap");

.ingredients {
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  margin-right: 3rem;
  margin-left: 3rem;
}

@media (max-width: 800px) {
  .ingredients {
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 1fr;
  }
}

.table {
  margin-left: auto;
  margin-right: auto;
}

tr {
  font-family: "Khand", sans-serif;
  letter-spacing: 0.05em;
  color: #df7e5f;
  font-size: 1.5em;
}

.ingr {
  width: 8em;
  text-align: right;
}

.measure {
  width: 6em;
}

.text {
  font-family: "Khand", sans-serif;
  letter-spacing: 0.05em;
  color: #df7e5f;
  font-size: 1.3em;
  text-align: justify;
}

.preparation {
  margin-right: 3rem;
  margin-left: 3rem;
}

.pics-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
