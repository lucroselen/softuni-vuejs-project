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
          <li>
            <h3>Toyota Corolla</h3>
            <br />

            <a href="https://www.example.com/car1"
              ><img
                src="https://cf-cdn-v5.audi.at/media/GalleryThumbnails_Slider_Image_Component/66694-673604-slider-413608/dh-1168-a9ad28/7e2aa426/1675153383/1920x1080-audi-rs-6-avant-my2021-1529-oe.jpg"
                alt="Car 1"
            /></a>
          </li>
          <li>
            <h3>Toyota Corolla</h3>
            <br />

            <a href="https://www.example.com/car2"
              ><img
                src="https://cf-cdn-v5.audi.at/media/GalleryThumbnails_Slider_Image_Component/66694-673604-slider-413608/dh-1168-a9ad28/7e2aa426/1675153383/1920x1080-audi-rs-6-avant-my2021-1529-oe.jpg"
                alt="Car 2"
            /></a>
          </li>
          <li>
            <h3>Toyota Corolla</h3>
            <br />

            <a href="https://www.example.com/car2"
              ><img
                src="https://cf-cdn-v5.audi.at/media/GalleryThumbnails_Slider_Image_Component/66694-673604-slider-413608/dh-1168-a9ad28/7e2aa426/1675153383/1920x1080-audi-rs-6-avant-my2021-1529-oe.jpg"
                alt="Car 2"
            /></a>
          </li>
          <li>
            <h3>Toyota Corolla</h3>
            <br />
            <a href="https://www.example.com/car2"
              ><img
                src="https://cf-cdn-v5.audi.at/media/GalleryThumbnails_Slider_Image_Component/66694-673604-slider-413608/dh-1168-a9ad28/7e2aa426/1675153383/1920x1080-audi-rs-6-avant-my2021-1529-oe.jpg"
                alt="Car 2"
            /></a>
          </li>
          <li>
            <h3>Toyota Corolla</h3>
            <br />
            <a href="https://www.example.com/car2"
              ><img
                src="https://cf-cdn-v5.audi.at/media/GalleryThumbnails_Slider_Image_Component/66694-673604-slider-413608/dh-1168-a9ad28/7e2aa426/1675153383/1920x1080-audi-rs-6-avant-my2021-1529-oe.jpg"
                alt="Car 2"
            /></a>
          </li>
          <li>
            <h3>Toyota Corolla</h3>
            <br />
            <a href="https://www.example.com/car2"
              ><img
                src="https://cf-cdn-v5.audi.at/media/GalleryThumbnails_Slider_Image_Component/66694-673604-slider-413608/dh-1168-a9ad28/7e2aa426/1675153383/1920x1080-audi-rs-6-avant-my2021-1529-oe.jpg"
                alt="Car 2"
            /></a>
          </li>
          <li>
            <h3>Toyota Corolla</h3>
            <br />
            <a href="https://www.example.com/car2"
              ><img
                src="https://cf-cdn-v5.audi.at/media/GalleryThumbnails_Slider_Image_Component/66694-673604-slider-413608/dh-1168-a9ad28/7e2aa426/1675153383/1920x1080-audi-rs-6-avant-my2021-1529-oe.jpg"
                alt="Car 2"
            /></a>
          </li>
          <li>
            <h3>Toyota Corolla</h3>
            <br />
            <a href="https://www.example.com/car2"
              ><img
                src="https://cf-cdn-v5.audi.at/media/GalleryThumbnails_Slider_Image_Component/66694-673604-slider-413608/dh-1168-a9ad28/7e2aa426/1675153383/1920x1080-audi-rs-6-avant-my2021-1529-oe.jpg"
                alt="Car 2"
            /></a>
          </li>
          <li>
            <h3>Toyota Corolla</h3>
            <br />
            <a href="https://www.example.com/car2"
              ><img
                src="https://cf-cdn-v5.audi.at/media/GalleryThumbnails_Slider_Image_Component/66694-673604-slider-413608/dh-1168-a9ad28/7e2aa426/1675153383/1920x1080-audi-rs-6-avant-my2021-1529-oe.jpg"
                alt="Car 2"
            /></a>
          </li>
          <li>
            <h3>Toyota Corolla</h3>
            <br />
            <a href="https://www.example.com/car2"
              ><img
                src="https://cf-cdn-v5.audi.at/media/GalleryThumbnails_Slider_Image_Component/66694-673604-slider-413608/dh-1168-a9ad28/7e2aa426/1675153383/1920x1080-audi-rs-6-avant-my2021-1529-oe.jpg"
                alt="Car 2"
            /></a>
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
  justify-content: space-between;
  list-style-type: none;
}

.favorite-cars li {
  margin-bottom: 15px;
  width: 18%; /* Adjust as needed for spacing */
}

.favorite-cars img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.favorite-cars img:hover {
  transform: scale(1.1);
}
</style>
