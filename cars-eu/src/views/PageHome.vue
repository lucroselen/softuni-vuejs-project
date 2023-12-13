<script>
import { mapState } from "pinia";
import { useUserStore } from "../store/userStore";

export default {
  setup() {
    const userStore = useUserStore();
    return { userStore };
  },
  computed: {
    ...mapState(useUserStore, ["isAuthenticated"]),
  },
};
</script>

<template>
  <div>
    <section id="home">
      <div class="home-container">
        <h1>Welcome to CARS EU</h1>
        <h2>Here you could find your dream car!</h2>
        <h3>Today's highlight - the BMW M5 E60 V10:</h3>
        <iframe
          width="600"
          height="355"
          src="https://www.youtube.com/embed/YTitWDtipJE?si=MAccezicARZVBsCh"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <router-link
          :to="!isAuthenticated ? 'user/login' : '/all-cars'"
          class="btn-get-started"
          >Get Started</router-link
        >
      </div>
    </section>
  </div>
</template>

<style scoped>
#home {
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.25);
  position: relative;
}

#home .home-container {
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
#home h1 {
  font-family: Arial, Helvetica, sans-serif;
  margin: 30px 0 10px 0;
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  text-transform: uppercase;
  color: #fff;
}

#home h2 {
  font-family: Arial, Helvetica, sans-serif;
  color: #eee;
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: normal;
}

h3 {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: normal;
  padding-bottom: 1%;
  color: #eee;
}

#home .btn-get-started {
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  padding: 8px 28px;
  border-radius: 50px;
  transition: 0.5s;
  margin: 20px;
  border: 2px solid #fff;
  color: rgb(255, 255, 255);
}
#home .btn-get-started:hover {
  background: rgb(31, 135, 45);
  border: 2px solid rgb(31, 135, 45);
}
</style>
