<script>
import { getProfile } from "../dataProviders/auth";
import Loader from "../components/Loader.vue";
export default {
  components: { Loader },
  data() {
    return {
      profile: {},
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
      this.isLoading = true;
      this.profile = await getProfile();
      this.isLoading = false;
    },
  },
};
</script>

<template>
  <Loader v-if="isLoading"></Loader>
  <div v-else class="allign">
    <div class="profile-container">
      <div class="profile-info">
        <strong
          ><h1>Hello, {{ profile.firstName }} {{ profile.lastName }}</h1>
        </strong>
      </div>
      <br />

      <div class="favorite-cars">
        <h2>These are your favorite Cars:</h2>
        <br />
        <ul>
          <li v-for="car in profile.favorites" :key="car._id">
            <h3>{{ car.brand }} {{ car.model }}</h3>
            <br />

            <router-link :to="`/details/${car._id}`"
              ><img class="img" :src="car.imgUrl" alt="Car"
            /></router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.allign {
  padding-top: 100px;
  padding-bottom: 100px;
}
.profile-container {
  width: 80%;
  margin: 20px auto;
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.profile-container h2 {
  color: #343a40;
}

.profile-info {
  text-align: center;
}
.favorite-cars {
  flex: 1;
  list-style-type: none;
  padding: 0;
}

.favorite-cars ul {
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  list-style-type: none;
}

.favorite-cars li {
  margin-bottom: 15px;
  width: 18%;
}

.img {
  width: 600px;
  height: 200px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.favorite-cars img:hover {
  transform: scale(1.1);
}
</style>
