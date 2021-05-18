<template>
    <div class="picture-area">
        <img class="picture" v-bind:src=picSrc v-bind:alt=picAlt />
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "RandomPicture",
        props: {
            picSrc: String,
            picAlt: String
        }
    });
</script>

<style scoped>

    .picture-area {
        display: flex;
        justify-content: center;
    }

    .picture {
        height: 25em;
        width: 25em;
        border-radius: 30px;
        margin: 1em;
    }
</style>