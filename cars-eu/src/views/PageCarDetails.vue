<script>
import {
  getCar,
  deleteCar,
  likeCar,
  dislikeCar,
  favoriteCar,
} from "../dataProviders/cars";
import Loader from "../components/Loader.vue";
import starsGenerator from "../helpers/starsGenerator";

export default {
  components: { Loader },
  data() {
    return {
      carData: {},
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
      this.carData = await getCar(this.$route.params.id);
      this.isLoading = false;
    },
    async deleteCar() {
      this.isLoading = true;
      await deleteCar(this.carData.car._id);
      this.isLoading = false;
      this.$router.push("/all-cars");
    },
    async likeCar() {
      await likeCar(this.carData.car._id);
      this.carData.car.rating++;
    },
    async dislikeCar() {
      await dislikeCar(this.carData.car._id);
      this.carData.car.rating--;
    },
    async favoriteCar() {
      await favoriteCar(this.carData.car._id);
    },
  },
  computed: {
    calculateStars() {
      return starsGenerator(this.carData.car.rating);
    },
  },
};
</script>

<template>
  <Loader v-if="isLoading"></Loader>
  <body v-else>
    <div class="container">
      <div class="row-container">
        <div class="row">
          <div class="flex-container">
            <div class="project-info-box">
              <h2><b>Car Details</b></h2>
              <p id="carDescription">
                {{ carData.car.description }}
              </p>
            </div>
            <div class="project-info-box" id="carInfo">
              <p><b>Brand:</b> {{ carData.car.brand }}</p>
              <p><b>Model:</b> {{ carData.car.model }}</p>
              <p><b>Year:</b> {{ carData.car.year }}</p>
              <p><b>Fuel Type:</b> {{ carData.car.fuelType }}</p>
              <p><b>Mileage:</b> {{ carData.car.mileage }} KM</p>
              <p>
                <b>Added by:</b> {{ carData.car.creator.firstName }}
                {{ carData.car.creator.lastName }} (contact for a deal)
              </p>
              <p><b>Price:</b> {{ carData.car.price }} BGN</p>
              <p>
                <b>Current car rating: </b
                ><b style="color: orange"
                  >{{ carData.car.rating }} {{ calculateStars }}</b
                >
              </p>
            </div>
            <div class="project-info-box mybuttons">
              <button class="success-btn" @click="likeCar">Like</button>
              <button class="warning-btn" @click="dislikeCar">Dislike</button>
            </div>
            <div class="project-info-box mybuttons">
              <button class="fav-btn" @click="favoriteCar">
                Add to Favorites
              </button>
            </div>
            <div class="project-info-box mybuttons">
              <router-link class="dark-btn" :to="`/edit/${carData.car._id}`"
                >Edit</router-link
              >
              <button class="danger-btn" @click="deleteCar">Delete</button>
            </div>
          </div>
        </div>
        <div class="row img">
          <div class="flex-container">
            <div class="image-container">
              <img
                :src="carData.car.imgUrl"
                alt="project-pic"
                class="rounded"
              />
            </div>
            <div id="wrapper">
              <form id="commentForm">
                <textarea
                  id="comment"
                  rows="3"
                  placeholder="Write a comment..."
                  required
                ></textarea>
                <input class="comment-btn" type="submit" value="Add Comment" />
              </form>
            </div>
            <div class="project-comment-box" id="commentsSection">
              <h2 class="commentTitle">Comments:</h2>
              <p class="comment">Lorem ipsum comment 1.</p>
              <p class="comment">Lorem ipsum comment 2.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<style scoped>
body {
  font-family: "Barlow", sans-serif;
  font-weight: 300;
  font-size: 1rem;
  color: #686c6d;
  letter-spacing: 0.03rem;
  margin: 0;
  padding: 0;
}
h2 {
  color: #000;
  margin-bottom: 0.5rem;
  margin-top: -0.5rem;
}

.container {
  padding-top: 100px;
  padding-bottom: 100px;
  margin: auto;
}

.row-container {
  display: flex;
  justify-content: center;
  gap: 26px;
}

.row {
  display: flex;
}

.img {
  padding-top: 0.65rem;
}

.flex-container {
  display: flex;
  flex-direction: column;
}

.project-info-box {
  margin: 10px 0;
  background-color: #fff;
  padding: 30px 40px;
  border-radius: 5px;
  max-width: 400px;
  word-wrap: break-word;
}

.project-comment-box {
  margin: 10px 0;
  background-color: #fff;
  padding: 30px 40px;
  border-radius: 5px;
  max-width: 1000px;
  word-wrap: break-word;
}

.project-info-box p,
.project-comment-box p {
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #d5dadb;
}

.project-info-box p:last-child,
.project-comment-box p:last-child {
  margin-bottom: 0;
  padding-bottom: 0;
  border-bottom: none;
}

.rounded {
  border-radius: 5px;
}
.comment {
  font-weight: bold;
}
.comment:not(:last-child) {
  margin-bottom: 1rem;
}

.commentTitle {
  margin-bottom: 1.75rem;
  margin-top: -1rem;
}

#commentForm {
  margin-top: 20px;
}

.image-container {
  width: 100%;
  height: 609px;
  overflow: hidden;
  min-width: 1000px;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

textarea {
  border-radius: 5px;
  padding: 0.4rem 0.8rem;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 10px;
  font-size: 1.15rem;
  border: none;
}

textarea:focus {
  outline: none;
  box-shadow: 0 0 14px #3590f1;
}
button,
.dark-btn {
  margin: 6px;
  width: 100%;
  text-align: center;
}
.mybuttons,
.dark-btn {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.comment-btn {
  padding: 10px 20px;
  background-color: #201f1f;
  color: #fff;
  float: right;
  font-size: large;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  margin-bottom: 26px;
}

.success-btn {
  background-color: #138e30;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.warning-btn {
  background-color: #ffc107;
  color: #000;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.fav-btn {
  background: linear-gradient(
    90deg,
    rgb(23, 0, 153) 0%,
    rgb(81, 53, 0) 50%,
    rgba(23, 0, 153) 100%
  );
  color: #ffffff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

.dark-btn {
  background-color: #343a40;
  color: #fff;
  text-decoration: none;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.danger-btn {
  background-color: #dc3545;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
