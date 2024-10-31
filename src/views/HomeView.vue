<script setup lang="ts">
import ItemComponent from "../components/ItemComponent.vue";

const today = new Date();
const actualDate = today.toLocaleDateString("pt-Br");
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

  & > div {
    margin: auto;
    width: fit-content;
    text-align: center;
    color: rgb(40, 40, 40);
    background-color: white;
    border-radius: 3px;
    padding: 1rem;
    font-size: 2em;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-weight: bolder;
    letter-spacing: 0.1em;

    & > p {
      font-size: 0.5em;
    }
  }
}

.home-content {
  background-color: rgb(250, 250, 250);
  width: 100%;
  height: 100vh;

  & > div {
    padding: 5rem;
  }
}

.about-us {
  background-color: white;
  border-radius: 0.5rem;
  width: 40%;
  text-align: justify;
  // text-decoration: underline;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 1.3em;

  & > img {
    width: 40rem;
    border-radius: 0.7rem;
  }
}

.sinceContainer {
  width: 30%;
  float: right;
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

.sinceText{
  background-color: white;
  border-radius: 1rem;
  padding: 1rem;
  & > p {
    font-size: 1.8em;
  }
}
</style>
