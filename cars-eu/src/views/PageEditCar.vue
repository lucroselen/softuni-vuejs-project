<script>
import { editCar, getCar } from "../dataProviders/cars";
import { useVuelidate } from "@vuelidate/core";
import { required, minLength, minValue, helpers } from "@vuelidate/validators";
import Alert from "../components/Alert.vue";

const validateLink = (value) => /^https?:\/\//i.test(value);

export default {
  components: { Alert },
  setup() {
    return { v$: useVuelidate() };
  },
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
      isLoading: false,
      backendError: null,
      errorNotification: false,
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
      this.errorNotification = false;
      const isValid = await this.v$.$validate();

      if (isValid) {
        this.isLoading = true;
        let carData = await editCar(this.carData.car, this.carData.car._id);

        if (carData.error) {
          this.backendError = carData.error;
          this.errorNotification = true;
          this.isLoading = false;
        } else {
          this.$router.push(`/details/${this.carData.car._id}`);
          this.isLoading = false;
        }
      }
    },
  },
  validations() {
    return {
      carData: {
        car: {
          brand: { required, minLength: minLength(3) },
          model: { required, minLength: minLength(2) },
          imgUrl: {
            required,
            validateLink: helpers.withMessage(
              "Please provide a valid link!",
              validateLink
            ),
          },
          fuelType: { required, minLength: minLength(3) },
          year: { required },
          description: { required, minLength: minLength(8) },
          mileage: { required, minminValue: minValue(0) },
          price: { required, minminValue: minValue(0) },
        },
      },
    };
  },
};
</script>

<template>
  <section id="editCar" class="fix">
    <Alert v-if="errorNotification" :alert="backendError"></Alert>
    <form @submit.prevent="onSubmit" class="container">
      <h3>Edit a Car</h3>
      <div class="brand-model">
        <div class="form-group">
          <label for="brand"> Brand </label>
          <input
            type="text"
            v-model="v$.carData.car.brand.$model"
            id="brand"
            class="form-control"
            name="brand"
            placeholder="Example: Mercedes"
            :disabled="isLoading"
            :class="{ error: v$.carData.car.brand.$errors.length > 0 }"
          />
          <div v-for="error of v$.carData.car.brand.$errors" :key="error.$uid">
            <div class="error-msg">
              {{ error.$message }}
            </div>
          </div>
        </div>
        <div class="form-group">
          <label for="model"> Model </label>
          <input
            v-model="v$.carData.car.model.$model"
            type="text"
            id="model"
            name="model"
            class="form-control"
            placeholder="Example: C 220"
            :disabled="isLoading"
            :class="{ error: v$.carData.car.model.$errors.length > 0 }"
          />
          <div v-for="error of v$.carData.car.model.$errors" :key="error.$uid">
            <div class="error-msg">
              {{ error.$message }}
            </div>
          </div>
        </div>
      </div>
      <label for="imgUrl"> Car Image </label>
      <input
        v-model="v$.carData.car.imgUrl.$model"
        type="text"
        class="form-control"
        id="imgUrl"
        name="imgUrl"
        placeholder="https://..."
        :disabled="isLoading"
        :class="{ error: v$.carData.car.imgUrl.$errors.length > 0 }"
      />
      <div v-for="error of v$.carData.car.imgUrl.$errors" :key="error.$uid">
        <div class="error-msg">
          {{ error.$message }}
        </div>
      </div>
      <label for="isbn"> Fuel Type </label>
      <input
        v-model="v$.carData.car.fuelType.$model"
        type="text"
        id="fuelType"
        name="fuelType"
        class="form-control"
        placeholder="Diesel, Gasoline, Hybrid..."
        :disabled="isLoading"
        :class="{ error: v$.carData.car.fuelType.$errors.length > 0 }"
      />
      <div v-for="error of v$.carData.car.fuelType.$errors" :key="error.$uid">
        <div class="error-msg">
          {{ error.$message }}
        </div>
      </div>
      <label for="year"> Year </label>
      <input
        v-model="v$.carData.car.year.$model"
        type="number"
        min="1960"
        max="2024"
        step="1"
        id="year"
        name="year"
        class="form-control"
        placeholder="Example: 2016"
        :disabled="isLoading"
        :class="{ error: v$.carData.car.year.$errors.length > 0 }"
      />
      <div v-for="error of v$.carData.car.year.$errors" :key="error.$uid">
        <div class="error-msg">
          {{ error.$message }}
        </div>
      </div>
      <label for="description"> Description </label>
      <textarea
        v-model="v$.carData.car.description.$model"
        class="form-control"
        id="description"
        rows="3"
        name="description"
        placeholder="A short description of the car..."
        :disabled="isLoading"
        :class="{ error: v$.carData.car.description.$errors.length > 0 }"
      ></textarea>
      <div
        v-for="error of v$.carData.car.description.$errors"
        :key="error.$uid"
      >
        <div class="error-msg">
          {{ error.$message }}
        </div>
      </div>
      <label for="mileage"> Mileage (in KM) </label>
      <input
        v-model="v$.carData.car.mileage.$model"
        type="number"
        step="1"
        min="0"
        max="500000"
        class="form-control"
        id="mileage"
        name="mileage"
        placeholder="Example: 10 000"
        :disabled="isLoading"
        :class="{ error: v$.carData.car.mileage.$errors.length > 0 }"
      />
      <div v-for="error of v$.carData.car.mileage.$errors" :key="error.$uid">
        <div class="error-msg">
          {{ error.$message }}
        </div>
      </div>
      <label for="price"> Price (in BGN) </label>
      <input
        v-model="v$.carData.car.price.$model"
        type="number"
        step="1"
        min="0"
        max="999999999999"
        class="form-control"
        id="price"
        name="price"
        placeholder="Example: 30 000"
        :disabled="isLoading"
        :class="{ error: v$.carData.car.price.$errors.length > 0 }"
      />
      <div v-for="error of v$.carData.car.price.$errors" :key="error.$uid">
        <div class="error-msg">
          {{ error.$message }}
        </div>
      </div>
      <input
        class="btn"
        type="submit"
        :disabled="isLoading"
        defaultValue="Edit"
      />
    </form>
  </section>
</template>

<style scoped>
.error-msg {
  color: #dc3545;
  font-size: 16px;
}

form .error {
  border: 2px solid #dc3545;
}
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
