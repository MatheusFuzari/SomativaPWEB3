<script setup lang="ts">
import { MotorcycleParts } from "@/models/Motorcycle";
import { ref, type Ref } from "vue";

export type PropsType = {
  parts: Array<MotorcycleParts>;
  position: "front" | "engine" | "frontTyre" | "rearTyre";
};

const props = defineProps<PropsType>();

const partIndex: Ref<number> = ref(0);

const model = defineModel<MotorcycleParts | null>();

const changeIndex = (next: boolean) => {
  const newIndex = next ? partIndex.value + 1 : partIndex.value - 1;

  if (newIndex < 0) {
    partIndex.value = props.parts.length - 1;
  } else if (newIndex > props.parts.length - 1) {
    partIndex.value = 0;
  } else {
    partIndex.value = newIndex;
  }

  model.value = props.parts[partIndex.value];
  console.log(partIndex.value);
};
</script>
<template>
  <div :class="`part-selector ${props.position}`">
    <img :src="props.parts[partIndex].imgUrl" :class="`part-selected`" />
    <button v-on:click="changeIndex(false)" :class="`prev-selector`"><</button>
    <button v-on:click="changeIndex(true)" :class="`next-selector`">></button>
  </div>
</template>
<style lang="scss" scoped>
.part-selector {
  position: relative;
  width: 10rem;
  height: 10rem;

  img {
    width: 10rem;
    height: 10rem;
  }

  button {
    position: absolute;
    z-index: 1;
    width: 25px;
    height: 171px;
    background-color: red;
  }

  .prev-selector {
    left: -30px;
  }

  .next-selector {
    right: -30px;
  }
}

.rearTyre {
  img {
    position: relative;
    top: -50px;
  }

  button {
    background-color: rgb(255, 0, 0, 0.5);
  }

  .prev-selector {
    left: 10px;
    width: 151px;
    height: 25px;
    top: -80px;
  }

  .next-selector {
    right: 0px;
    width: 151px;
    height: 25px;
    top: 120px;
  }
}

.engine {
  img {
    position: relative;
    width: 6rem;
    height: 6rem;
    left: 50px;
    top: 10px;
  }

  button {
    background-color: rgb(255, 0, 0, 0.5);
  }

  .prev-selector {
    left: 45px;
    width: 111px;
    height: 25px;
    top: -18px;
  }

  .next-selector {
    right: 5px;
    width: 111px;
    height: 25px;
    top: 110px;
  }
}

.front {
  img {
    position: relative;
    right: 30px;
    bottom: 40px;
  }

  .prev-selector {
    height: 141px;
    left: -60px;
  }

  .next-selector {
    right: 0px;
    height: 141px;
  }
}

.frontTyre {
  img {
    position: relative;
    right: 20px;
    bottom: 10px;
  }

  .prev-selector {
    height: 141px;
    left: -60px;
  }

  .next-selector {
    right: -20px;
    height: 141px;
  }
}
//"front" | "engine" | "frontTyre" | "rearTyre";

// .part-selector .rearTyre{
//     height: 20rem;
//     width: 15rem;
//     // object-fit: contain;
//     background-color: red;
// }

// .front {

//     & > .next-selector {
//     width: 2rem;
//     height: 100%;
// }

//     & > .prev-selector {
//     width: 2rem;
//     height: 100%;
//     }
// }
</style>
