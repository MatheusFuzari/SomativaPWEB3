<script setup lang="ts">
import { type MotorExhibition } from '@/models/Motorcycle';

const props = defineProps<MotorExhibition>()
</script>
<template>
    <div class="motor-card">
        <img :src="props.imgUrl">
        <p>{{ props.name }}</p>
        <RouterLink to="/change" class="purchaseButton">Comprar agora!</RouterLink>
    </div>
</template>
<style lang="scss">
.motor-card {
    margin: 2rem;
    background-color: white;
    border-radius: 0.7rem;
    width: 30rem;
    height: 40rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
}

.motor-card>img {
    width: 90%;
    height: 50%;
    padding: 2rem;
}

.motor-card>p {
    font-size: 2em;
}

.purchaseButton {
    width: 80%;
    height: 4rem;
    border: 1px solid rgb(182, 118, 0);
    background-color: orange;
    color: white;
    border-radius: 0.7rem;
    font-size: 1.5em;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
}
</style>