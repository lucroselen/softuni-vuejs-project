<script>
import { editCar, getCar } from "../dataProviders/cars";

export default {
  data() {
    return {
      carData: {
        car: {
          brand: "",
          model: "",
          imgUrl: "",
          fuelType: "",
          year: "",
          description: "",
          mileage: "",
          price: "",
          creator: "",
        },
      },
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
      this.carData = await getCar(this.$route.params.id);
      this.isLoading = false;
    },
    async onSubmit() {
      await editCar(this.carData.car, this.carData.car._id);
      this.$router.push("/all-cars");
    },
  },
};
</script>

<template>
  <section id="editCar" class="fix">
    <form @submit.prevent="onSubmit" class="container">
      <h3>Edit a Car</h3>
      <div class="brand-model">
        <div class="form-group">
          <label for="brand"> Brand </label>
          <input
            type="text"
            v-model="carData.car.brand"
            id="brand"
            class="form-control"
            name="brand"
            placeholder="Example: Mercedes"
          />
        </div>
        <div class="form-group">
          <label for="model"> Model </label>
          <input
            v-model="carData.car.model"
            type="text"
            id="model"
            name="model"
            class="form-control"
            placeholder="Example: C 220"
          />
        </div>
      </div>
      <label for="imgUrl"> Car Image </label>
      <input
        v-model="carData.car.imgUrl"
        type="text"
        class="form-control"
        id="imgUrl"
        name="imgUrl"
        placeholder="https://..."
      />
      <label for="isbn"> Fuel Type </label>
      <input
        v-model="carData.car.fuelType"
        type="text"
        id="fuelType"
        name="fuelType"
        class="form-control"
        placeholder="Diesel, Gasoline, Hybrid..."
      />
      <label for="year"> Year </label>
      <input
        v-model="carData.car.year"
        type="number"
        min="1960"
        max="2024"
        step="1"
        id="year"
        name="year"
        class="form-control"
        placeholder="Example: 2016"
      />
      <label for="description"> Description </label>
      <textarea
        v-model="carData.car.description"
        class="form-control"
        id="description"
        rows="3"
        name="description"
        placeholder="A short description of the car..."
      ></textarea>
      <label for="mileage"> Mileage (in KM) </label>
      <input
        v-model="carData.car.mileage"
        type="number"
        step="100"
        min="0"
        max="500000"
        class="form-control"
        id="mileage"
        name="mileage"
        placeholder="Example: 10 000"
      />
      <label for="price"> Price (in BGN) </label>
      <input
        v-model="carData.car.price"
        type="number"
        step="100"
        min="0"
        max="999999999999"
        class="form-control"
        id="price"
        name="price"
        placeholder="Example: 30 000"
      />
      <input class="btn" type="submit" defaultValue="Edit" />
    </form>
  </section>
</template>

<style scoped>
h3 {
  font-size: xx-large;
  padding-bottom: 2%;
  margin-top: -2%;
}
.container {
  background-color: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.brand-model {
  display: flex;
  justify-content: space-between;
}

label {
  display: block;
  margin-bottom: 4px;
  color: #333;
}

.form-control {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn {
  background-color: rgb(7, 74, 198);
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 2%;
}

.btn:hover {
  background-color: rgb(49, 98, 189);
}
.brand-model {
  display: flex;
  justify-content: space-between;
}

.brand-model .form-group {
  flex: 0 0 48%;
  margin-bottom: 10px;
}
.fix {
  padding-top: 70px;
  padding-bottom: 70px;
  margin: auto;
  display: block;
  align-items: center;
  justify-content: center;
  width: 100vh;
}

.fix::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.3;
  z-index: -1;
}
</style>
