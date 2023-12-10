<script>
import { mapState } from "pinia";
import { useUserStore } from "../store/userStore";
import { addCar } from "../dataProviders/cars";

export default {
  setup() {
    const userStore = useUserStore();
    return { userStore };
  },
  data() {
    return {
      carData: {
        brand: "",
        model: "",
        imgUrl: "",
        fuelType: "",
        year: "",
        description: "",
        mileage: "",
        price: "",
        creator: this.userStore.id,
      },
    };
  },
  methods: {
    async onSubmit() {
      await addCar(this.carData);
      this.$router.push("/all-cars");
    },
  },
  computed: {
    ...mapState(useUserStore, ["id"]),
  },
};
</script>

<template>
  <section id="addCar" class="fix">
    <form @submit.prevent="onSubmit" class="container">
      <h3>Add a Car</h3>
      <div class="brand-model">
        <div class="form-group">
          <label for="brand"> Brand </label>
          <input
            v-model="carData.brand"
            type="text"
            id="brand"
            class="form-control"
            name="brand"
            placeholder="Example: Mercedes"
          />
        </div>
        <div class="form-group">
          <label for="model"> Model </label>
          <input
            v-model="carData.model"
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
        v-model="carData.imgUrl"
        type="text"
        class="form-control"
        id="imgUrl"
        name="imgUrl"
        placeholder="https://..."
      />
      <label for="fuelType"> Fuel Type </label>
      <input
        v-model="carData.fuelType"
        type="text"
        id="fuelType"
        name="fuelType"
        class="form-control"
        placeholder="Diesel, Gasoline, Hybrid..."
      />
      <label for="year"> Year </label>
      <input
        v-model="carData.year"
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
        v-model="carData.description"
        class="form-control"
        id="description"
        rows="3"
        name="description"
        placeholder="A short description of the car..."
      ></textarea>
      <label for="mileage"> Mileage (in KM) </label>
      <input
        v-model="carData.mileage"
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
        v-model="carData.price"
        type="number"
        step="100"
        min="0"
        max="999999999999"
        class="form-control"
        id="price"
        name="price"
        placeholder="Example: 30 000"
      />
      <input class="btn" type="submit" defaultValue="Submit" />
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
  background-color: #4caf50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 2%;
}

.btn:hover {
  background-color: #45a049;
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
