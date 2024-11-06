<script setup lang="ts">

import { MotorcycleParts } from '@/models/Motorcycle';
import { ref, type Ref } from 'vue';

export type PropsType = {
    parts: Array<MotorcycleParts>;
    position: "front"|"engine"|"frontTyre"|"rearTyre";
}

const props = defineProps<PropsType>();

const partIndex:Ref<number> = ref(0);

const model = defineModel<MotorcycleParts|null>();

const changeIndex = (next: boolean) => {
    const newIndex = next ? partIndex.value + 1 : partIndex.value - 1;
    if(newIndex < 0){
        partIndex.value = 0;
    }else if(newIndex > 0 && newIndex < (props.parts.length-1)){
        partIndex.value = (props.parts.length-1);
    }else {
        partIndex.value = newIndex;
    }

    model.value = props.parts[partIndex.value];
}

</script>
<template>
    <div class="part-selector">
        <img :src="props.parts[partIndex].imgUrl" :class="`part-selected ${props.position}`">
        <button v-on:click="changeIndex(true)" class="next-selector"></button>
        <button v-on:click="changeIndex(false)" class="prev-selector"></button>
    </div>
</template>
<style lang="scss">
    .part-selector {
        width: 10rem;
        height: 10rem;

        & > img {
            width: 100%;
        }
    }

    .part-selector .rearTyre{
        height: 20rem;
        width: 15rem;
        // object-fit: contain;
        background-color: red;
    }
</style>