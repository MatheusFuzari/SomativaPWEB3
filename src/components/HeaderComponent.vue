<script setup lang="ts">
import { ref, type Ref } from "vue";

const openMenu: Ref<boolean> = ref(true);

const openMenuClick = () => {
  openMenu.value = !openMenu.value;
};
</script>
<template>
  <div class="header">
    <div>
      <img src="../assets/images/sandwich-icon.svg" class="sandwich-icon" v-on:click="openMenuClick()" />
      <div class="header-left" v-if="openMenu == true">
        <ul>
          <RouterLink to="/"><li>Home</li></RouterLink>
          <RouterLink to="/change"><li>Montar</li></RouterLink>
          <li>Carrinho</li>
        </ul>
      </div>
    </div>
    <img src="../assets/vuelogo.png" class="logo" />
  </div>
</template>
<style lang="scss">
.header {
  background-color: white;
  width: 100%;
  height: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem 0 1rem;

  &>img {
    width: 4rem;
  }
}

a {
  text-decoration: none;
}

.sandwich-icon {
  width: 3rem;
}

.header-left {
  display: flex;
  width: 50%;
  height: 100%;
  align-items: center;

  &>ul {
    text-decoration: none;
    list-style: none;
    display: flex;
    gap: 2rem;

    & > li{
      cursor: pointer;
    }
  }
}

.sandwich-icon {
  display: none;
}
</style>
