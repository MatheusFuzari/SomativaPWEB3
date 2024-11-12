<script setup lang="ts">
import PartSelectorComponent from "@/components/PartSelectorComponent.vue";
import { MotorcycleParts, MotorcycleResponse } from "@/models/Motorcycle";
import { getParts } from "@/services/part.service";
import { reactive, ref, type Ref } from "vue";

const parts: Ref<MotorcycleResponse> = ref(new MotorcycleResponse());
const selectedParts = reactive({
  front: new MotorcycleParts(),
  engine: new MotorcycleParts(),
  frontTyre: new MotorcycleParts(),
  rearTyre: new MotorcycleParts(),
});

getParts()
  .then((res) => {
    parts.value = res;
    selectedParts.front = res.front[0];
    selectedParts.engine = res.engine[0];
    selectedParts.frontTyre = res.frontTyre[0];
    selectedParts.rearTyre = res.rearTyre[0];
  })
  .catch((err) => console.error(err));
</script>
<template>
  <main class="mainChange">
    <div class="mainContainer">
      <!--  class="frontPart" -->
      <div>
        <section class="front-section">
          <PartSelectorComponent
            :parts="parts.front"
            position="front"
            v-model="selectedParts.front"
            class="front"
          />
        </section>
        <section class="middle-section">
          <PartSelectorComponent
            :parts="parts.frontTyre"
            position="frontTyre"
            v-model="selectedParts.frontTyre"
            class="frontTyre"
          />
          <PartSelectorComponent
            :parts="parts.engine"
            position="engine"
            v-model="selectedParts.engine"
            class="engine"
          />
          <PartSelectorComponent
            :parts="parts.rearTyre"
            position="rearTyre"
            v-model="selectedParts.rearTyre"
            class="rearTyre"
          />
        </section>
        <section class="rear-section">
        </section>
      </div>
    </div>
  </main>
</template>
<style lang="scss" scoped>
.mainChange {
  width: 100%;
  height: 100vh;
  background-color: rgb(39, 39, 39);
}

.mainContainer {
  width: 50%;
  height: 30rem;
  margin: auto;
  background-color: white;
  border-radius: 5px;
  position: relative;
  top: 50px;

  div {
    // background-color: black;
    position: relative;
    top: 50px;
  }
}

.front-section {
  display: flex;
  justify-content: space-around;
}

.middle-section {
  display: flex;
  justify-content: center;
}

.rear-section {
  display: flex;
  justify-content: space-around;
}
</style>
