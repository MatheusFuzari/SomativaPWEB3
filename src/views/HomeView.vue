<script setup lang="ts">
import ItemComponent from '../components/ItemComponent.vue'
</script>

<template>
  <main class="home-main">
    <section class="first-banner">
      <div class="banner-text">
        <img src="../assets/images/banner.jpg">
        <div>
          <p class="title">Mange Racing</p>
          <p class="date">29/10/2024</p>
        </div>
      </div>
    </section>
    <section class="info-container">
      <div class="resume">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque animi ea deserunt vero illum illo asperiores
          accusamus nostrum magnam ipsum recusandae saepe vel officia perferendis, facilis odit quibusdam a natus!</p>
      </div>
      <div class="motocicle-dispay">
        <ItemComponent />
        <ItemComponent />
        <ItemComponent />
      </div>
    </section>
    <section class="last-banner">
      <img src="../assets/images/banner.jpg">
    </section>
  </main>
</template>

<style lang="scss">
.home-main {
  width: 100%;

  &>.first-banner {
    width: 100%;
    height: 25%;

    &>.banner-text {

      &>img {
        width: 100%;
        height: 30rem;
      }

      &>div {
        //position: relative;
        width: 90%;
        height: 10rem;
        background-color: white;
        color: black;
        border-bottom: 2px solid grey;
        display: flex;
        flex-direction: row;
        gap: 20rem;

        &>.title {
          font-size: 5em;
        }

        &>.date {
          font-size: 2em;
          text-decoration: underline;
        }
      }
    }
  }

  &>.info-container {
    height: 50%;
    background-color: white;
    color: black;

    &>.resume {
      padding: 2rem;
    }

    &>.motocicle-dispay {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 3rem;
    }
  }

  &>.last-banner > img {
    width: 100%;
    height: 30rem;
  }
}
</style>