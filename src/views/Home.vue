<template>
  <div>
    <Header :text=headerText />
    <GroupPicture :picGrSrc=image :picGrAlt=sign />
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
    GroupPicture
  },
  data() {
    return {
      headerText: `No ideas what to cook for dinner?
Try our recepies randomizer 
to find the inspiration
for your next meal!
Enjoy!`,
      image: 'https://www.kwestiasmaku.com/sites/v123.kwestiasmaku.com/files/zupa_z_bobem_01.jpg',
      sign: 'zupa z bobu'
    };
  },
});
</script>

<style scoped>

</style>
