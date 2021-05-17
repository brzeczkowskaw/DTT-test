<template>
    <div class="picture-area">
        <img class="picture" v-bind:src=picGrSrc alt={{picGrAlt}} /> 
        <div class="name">{{picGrAlt}}</div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "GroupPicture",
        props: {
            picGrSrc: String,
            picGrAlt: String
        }
    });
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

    .picture-area {
        display: flex;
        justify-content: center;
        width: 25em;
        margin: 2em;
    }

    .picture {
        height: 25em;
        width: 25em;
        border-radius: 30px;
    }

    .name {
        font-family: 'Bebas Neue', cursive;
        letter-spacing: 0.1em;
        text-align: center;
        font-size: 2.8em;
        width: 6em;
        height: 7em;
    }

    .picture-area .name {
        visibility: hidden;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 9em;
        height: 9em;
        background-color: #882335d8;
        border-radius: 30px;
    }

    .picture-area:hover .name {
        visibility: visible;
    }

</style>