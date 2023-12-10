<script>
import { getCars } from "../dataProviders/cars";
import Loader from "../components/Loader.vue";
import starsGenerator from "../helpers/starsGenerator";

export default {
  components: { Loader },
  data() {
    return {
      allCars: {},
      isLoading: true,
    };
  },
  async created() {
    await this.loadData();
  },
  watch: {
    $route() {
      this.loadData();
    },
  },
  methods: {
    async loadData() {
      this.allCars = await getCars(window.location.href.split("/").pop());
      this.allCars.cars.forEach((e) => (e.stars = starsGenerator(e.rating)));
      this.isLoading = false;
    },
  },
};
</script>

<template>
  <div class="carContainer">
    <div v-if="allCars.cars?.length == 0">
      <h1>There are no cars in the database!</h1>
    </div>
    <Loader v-if="isLoading" />

    <div v-else v-for="car of allCars.cars" :key="car._id" class="card">
      <div class="carText">
        <h3>{{ car["brand"] }} {{ car["model"] }}</h3>
        <span class="stars"> {{ car["stars"] }}</span>
        <span
          ><b
            >{{ car["year"] }}, {{ car["fuelType"] }}, {{ car["mileage"] }} KM,
            {{ car["price"] }} BGN</b
          ></span
        >
        <p>
          {{ car["description"] }}
        </p>
        <router-link to="/details">Details</router-link>
      </div>
      <div class="carImage">
        <img :src="car['imgUrl']" alt="car-image" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.carContainer {
  display: flex;
  align-items: stretch;
  justify-content: center;
  flex-wrap: wrap;
  margin: 4rem auto;
  gap: 1rem;
}

.card {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  border: 1px solid #fff;
  background-color: rgb(233, 233, 233);
  border-radius: 10px;
  margin: 1rem;
  width: 360px;
  height: 540px;
}

.card img {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.carImage {
  border-radius: 10px;
  overflow: hidden;
  width: 96%;
  height: 40%;
  margin: 0rem 0rem 1.5rem;
}

.carText {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-top: 1px solid black;
  width: 88%;
  height: 50%;
  padding: 1rem 0.25rem;
  position: relative;
}

.carText h3 {
  margin: 0.25rem 0;
}

.card a {
  position: absolute;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  padding: 10px 28px;
  border-radius: 10px;
  transition: 0.5s;
  border: unset;
  margin: 3rem 0rem 0rem;
  background: rgb(145, 203, 236);
  color: rgb(0, 0, 0);
  bottom: 12px;
}

.card a:hover {
  background: rgb(31, 135, 45);
  color: #fff;
  cursor: pointer;
}

.stars {
  margin-bottom: 0.25rem;
  margin-top: -0.25rem;
}
</style>
