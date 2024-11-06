<script setup lang="ts">

import PartSelectorComponent from '@/components/PartSelectorComponent.vue';
import { MotorcycleParts, MotorcycleResponse } from '@/models/Motorcycle';
import { getParts } from '@/services/part.service';
import { reactive, ref, type Ref } from 'vue';

const parts:Ref<MotorcycleResponse> = ref(new MotorcycleResponse());
const selectedParts = reactive({
    front: new MotorcycleParts(),
    engine: new MotorcycleParts(),
    frontTyre: new MotorcycleParts(),
    rearTyre: new MotorcycleParts()
});

getParts()
.then((res) => {
    parts.value = res;
    selectedParts.front = res.front[0];
    selectedParts.engine = res.engine[0];
    selectedParts.frontTyre = res.frontTyre[0];
    selectedParts.rearTyre = res.rearTyre[0];
})
.catch((err) => console.error(err))

</script>
<template>
    <main class="mainChange">
        <div class="mainContainer">
            <div class="frontPart">
                <div></div>
                <PartSelectorComponent :parts="parts.front" position="front" v-model="selectedParts.front" class="front" />
                <PartSelectorComponent :parts="parts.frontTyre" position="frontTyre" v-model="selectedParts.frontTyre" class="frontTyre"/>
                <PartSelectorComponent :parts="parts.engine" position="engine" v-model="selectedParts.engine" class="engine"/>
            </div>
            <div class="rearParts">
                <PartSelectorComponent :parts="parts.rearTyre" position="rearTyre" v-model="selectedParts.rearTyre" class="rearTyre"/>
            </div>
        </div>
    </main>
</template>
<style lang="scss">
    .mainChange {
        width: 100%;
        height: 100vh;
        background-color: rgb(39, 39, 39);
    }

    .mainContainer {
        width: 80%;
        height: 50rem;
        margin: auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    .frontPart {
        display: grid;
        height: fit-content;
        grid-template-columns: 1fr 1fr;
    }
    
</style>