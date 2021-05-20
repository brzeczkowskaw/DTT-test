<template>
  <div>
    <Header :text=headerText />
    <div class="pics-container">
      <router-link v-bind:to="'/meal/' + groupCategory0 + '/' + groupId0" ><GroupPicture :picGrSrc=groupPhoto0 :picGrAlt=groupName0 /></router-link>
      <router-link v-bind:to="'/meal/' + groupCategory1 + '/' + groupId1" ><GroupPicture :picGrSrc=groupPhoto1 :picGrAlt=groupName1 /></router-link>
      <router-link v-bind:to="'/meal/' + groupCategory2 + '/' + groupId2" ><GroupPicture :picGrSrc=groupPhoto2 :picGrAlt=groupName2 /></router-link>
      <router-link v-bind:to="'/meal/' + groupCategory3 + '/' + groupId3" ><GroupPicture :picGrSrc=groupPhoto3 :picGrAlt=groupName3 /></router-link>
      <router-link v-bind:to="'/meal/' + groupCategory4 + '/' + groupId4" ><GroupPicture :picGrSrc=groupPhoto4 :picGrAlt=groupName4 /></router-link>
      <router-link v-bind:to="'/meal/' + groupCategory5 + '/' + groupId5" ><GroupPicture :picGrSrc=groupPhoto5 :picGrAlt=groupName5 /></router-link>
      <router-link v-bind:to="'/meal/' + groupCategory6 + '/' + groupId6" ><GroupPicture :picGrSrc=groupPhoto6 :picGrAlt=groupName6 /></router-link>
      <router-link v-bind:to="'/meal/' + groupCategory7 + '/' + groupId7" ><GroupPicture :picGrSrc=groupPhoto7 :picGrAlt=groupName7 /></router-link>
      <router-link v-bind:to="'/meal/' + groupCategory8 + '/' + groupId8" ><GroupPicture :picGrSrc=groupPhoto8 :picGrAlt=groupName8 /></router-link>
      <router-link v-bind:to="'/meal/' + groupCategory9 + '/' + groupId9" ><GroupPicture :picGrSrc=groupPhoto9 :picGrAlt=groupName9 /></router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from '../components/Header.vue';
import GroupPicture from '../components/GroupPicture.vue';

export default defineComponent({
  name: "Home",
  components: {
    Header,
    GroupPicture,
  },
  data() {
    return {
      headerText: `No ideas what to cook for dinner?
Try our recepies randomizer 
to find the inspiration
for your next meal!
Enjoy!`,
      groupPhoto0: '',
      groupPhoto1: '',
      groupPhoto2: '',
      groupPhoto3: '',
      groupPhoto4: '',
      groupPhoto5: '',
      groupPhoto6: '',
      groupPhoto7: '',
      groupPhoto8: '',
      groupPhoto9: '',
      groupName0: '',
      groupName1: '',
      groupName2: '',
      groupName3: '',
      groupName4: '',
      groupName5: '',
      groupName6: '',
      groupName7: '',
      groupName8: '',
      groupName9: '',
      groupId0: '',
      groupId1: '',
      groupId2: '',
      groupId3: '',
      groupId4: '',
      groupId5: '',
      groupId6: '',
      groupId7: '',
      groupId8: '',
      groupId9: '',
      groupCategory0: '',
      groupCategory1: '',
      groupCategory2: '',
      groupCategory3: '',
      groupCategory4: '',
      groupCategory5: '',
      groupCategory6: '',
      groupCategory7: '',
      groupCategory8: '',
      groupCategory9: '',
    };
  },
  methods: {
    async getRandomMeals() {
      const res = await fetch("https://themealdb.p.rapidapi.com/randomselection.php", {
	      "method": "GET",
	      "headers": {
		      "x-rapidapi-key": "93f974e090msh8c4227984a67af3p1f59dajsn266a08d9587b",
		      "x-rapidapi-host": "themealdb.p.rapidapi.com"
	      }
      })
      const results = await res.json();
      const meals = JSON.stringify(results);
      const allmeals = JSON.parse(meals);

      // 0
      this.groupPhoto0 = allmeals.meals[0].strMealThumb;
      this.groupName0 = allmeals.meals[0].strMeal;
      this.groupId0 = allmeals.meals[0].idMeal;
      this.groupCategory0 = allmeals.meals[0].strCategory;
      
      // 1
      this.groupPhoto1 = allmeals.meals[1].strMealThumb;
      this.groupName1 = allmeals.meals[1].strMeal;
      this.groupId1 = allmeals.meals[1].idMeal;
      this.groupCategory1 = allmeals.meals[1].strCategory;

      // 2
      this.groupPhoto2 = allmeals.meals[2].strMealThumb;
      this.groupName2 = allmeals.meals[2].strMeal;
      this.groupId2 = allmeals.meals[2].idMeal;
      this.groupCategory2 = allmeals.meals[2].strCategory;

      // 3
      this.groupPhoto3 = allmeals.meals[3].strMealThumb;
      this.groupName3 = allmeals.meals[3].strMeal;
      this.groupId3 = allmeals.meals[3].idMeal;
      this.groupCategory3 = allmeals.meals[3].strCategory;

      // 4
      this.groupPhoto4 = allmeals.meals[4].strMealThumb;
      this.groupName4 = allmeals.meals[4].strMeal;
      this.groupId4 = allmeals.meals[4].idMeal;
      this.groupCategory4 = allmeals.meals[4].strCategory;

      // 5
      this.groupPhoto5 = allmeals.meals[5].strMealThumb;
      this.groupName5 = allmeals.meals[5].strMeal;
      this.groupId5 = allmeals.meals[5].idMeal;
      this.groupCategory5 = allmeals.meals[5].strCategory;

      // 6
      this.groupPhoto6 = allmeals.meals[6].strMealThumb;
      this.groupName6 = allmeals.meals[6].strMeal;
      this.groupId6 = allmeals.meals[6].idMeal;
      this.groupCategory6 = allmeals.meals[6].strCategory;

      // 7
      this.groupPhoto7 = allmeals.meals[7].strMealThumb;
      this.groupName7 = allmeals.meals[7].strMeal;
      this.groupId7 = allmeals.meals[7].idMeal;
      this.groupCategory7 = allmeals.meals[7].strCategory;

      // 8 
      this.groupPhoto8 = allmeals.meals[8].strMealThumb;
      this.groupName8 = allmeals.meals[8].strMeal;
      this.groupId8 = allmeals.meals[8].idMeal;
      this.groupCategory8 = allmeals.meals[8].strCategory;

      // 9
      this.groupPhoto9 = allmeals.meals[9].strMealThumb;
      this.groupName9 = allmeals.meals[9].strMeal;
      this.groupId9 = allmeals.meals[9].idMeal;
      this.groupCategory9 = allmeals.meals[9].strCategory;
    }
  },
  beforeMount() {
    this.getRandomMeals()
  },
});
</script>

<style scoped>
  .pics-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
</style>
