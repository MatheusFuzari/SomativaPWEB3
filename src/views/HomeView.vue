<script setup lang="ts">
import { type Ref } from "vue";
import ItemComponent from "../components/ItemComponent.vue";
import { ref } from "vue";
import { type MotorExhibition } from "@/models/Motorcycle";

const today = new Date();
const actualDate = today.toLocaleDateString("pt-Br");

const motorData: Ref<Array<MotorExhibition>> = ref([
  {
    "imgUrl": "/src/assets/images/Group 40.png",
    "name": "Cross Rider 400"
  },
  {
    "imgUrl": "/src/assets/images/Group 41.png",
    "name": "Nimbus 1000"
  },
  {
    "imgUrl": "/src/assets/images/Group 42.png",
    "name": "Traveler 600"
  }
])
</script>

<template>
  <main class="home-main">
    <section class="home-title">
      <div>
        <h2>MANGE RACING</h2>
        <p>- {{ actualDate }} -</p>
      </div>
    </section>
    <section class="home-content">
      <div>
        <div class="about-us">
          <h2>
            Somos especialistas em fazer sonhos em 2 rodas, venha conferir
            conosco as maravilhas da Industria 4.0
          </h2>
          <img src="../assets/images/motorcycleDream.jpg" />
        </div>
        <div class="sinceContainer">
          <div class="sinceTitle">
            <h2>1948</h2>
            <div class="fade-line"></div>
            <h2>
              {{ today.getFullYear() }}
            </h2>
          </div>
          <div class="sinceText">
            <p>
              Inovando e criando tendências no mercado motociclistico. Contando
              com nosso arcenal tecnológico, você pode criar a motocicleta que
              tem a sua cara!
            </p>
          </div>
        </div>
      </div>
    </section>
    <hr>
    <section class="home-exhibition">
      <ItemComponent v-for="motor in motorData" :imgUrl="motor.imgUrl" :name="motor.name"></ItemComponent>
    </section>
  </main>
</template>

<style lang="scss">
.home-main {
  height: calc(100% - 2rem);
  background-image: url("../assets/images/harley-davidson-motorcycle-2 (1).jpg");
  background-position: 0 -9rem;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

.home-title {
  width: 100%;
  height: 35rem;
  display: flex;
  flex-direction: column;

  &>div {
    margin: auto;
    width: fit-content;
    text-align: center;
    color: rgb(40, 40, 40);
    background-color: white;
    border-radius: 3px;
    padding: 1rem;
    font-size: 2em;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif !important;
    font-weight: bolder;
    letter-spacing: 0.1em;

    &>p {
      font-size: 0.5em;
    }
  }
}

.home-content {
  background-color: rgb(250, 250, 250);
  width: 100%;
  height: 100%;


  & > div {
    padding: 5rem;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;
    align-items: center;
  }
}

.about-us {
  background-color: white;
  border-radius: 0.5rem;
  width: 40%;
  text-align: justify;
  // text-decoration: underline;
  padding: 2rem;
  font-size: 1.3em;

  &>img {
    width: 100%;
    border-radius: 0.7rem;
  }
}

.sinceContainer {
  width: 30%;
}

.sinceTitle {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 1rem;
  font-size: 1.3em;
  gap: 10px;
  margin-bottom: 0.3rem;
}

.fade-line {
  background: linear-gradient(90deg, orange, lightgreen);
  width: 13rem;
  height: 8px;
  border-radius: 10px;
}

.sinceText {
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;

  &>p {
    font-size: 1.8em;
  }
}

.home-exhibition {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(250, 250, 250);
}

</style>
