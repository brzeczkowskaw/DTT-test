<template>
    <div class="btn-area">
        <button class="btn">{{btnText}}</button>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from "vue";

    export default defineComponent({
        name: "Button",
        props: {
            btnText: String,
        }
    });
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Khand:wght@300&display=swap');

    .btn-area {
        display: flex;
        justify-content: center;
    }

    .btn {
        height: 2.8em;
        width: 14em;
        cursor: pointer;
        display: inline-block;
        background-color: #EE4E1C;
        border-radius: 10px;
        font-size: 1.8em;
        font-family: 'Khand', sans-serif;
        border-color: #EE4E1C;
        border: 0;
        letter-spacing: 0.05em;
    }
    .btn:focus {
        outline: none;
    }

    .btn:hover {
        transform: scale(0.96);
    }
</style>
