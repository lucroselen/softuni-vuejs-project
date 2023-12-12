<script>
import { mapActions } from "pinia";
import { loginUser } from "../dataProviders/auth";
import { useUserStore } from "../store/userStore";

export default {
  data() {
    return {
      userData: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useUserStore, ["setProfile"]),

    async onSubmit() {
      const userData = await loginUser(this.userData, "login");
      if (userData) {
        this.setProfile(userData.id, userData.user);
        this.$router.push("/all-cars");
      }
    },
  },
};
</script>

<template>
  <div class="loginContainer">
    <div class="loginWrapper">
      <div class="loginText">
        <h2>LOGIN</h2>
        <p>Glad to see you back! Please log-in to your account.</p>
      </div>
      <form @submit.prevent="onSubmit">
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          v-model="userData.email"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          v-model="userData.password"
        />
        <button type="submit">Login</button>
      </form>
      <div class="formLink">
        <span>Don't have an account?</span>
        <span><router-link to="/user/register">Sign Up</router-link></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.loginContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100vw;
  height: calc(100vh - (53px + 38px));
  margin-top: 53px;
  margin-bottom: 38px;
}

.loginContainer form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.loginContainer a,
.loginContainer span {
  color: #fff;
  padding-inline: 0.25rem;
}

.loginContainer button {
  margin: 1rem;
}

.loginWrapper {
  border: #212529da solid 1px;
  border-radius: 5%;
  -webkit-box-shadow: 0px 10px 1000px -7px #000000,
    0px 3px 12px 6px rgba(224, 224, 224, 0.2);
  box-shadow: 0px 10px 1000px -7px #000000,
    0px 3px 12px 6px rgba(224, 224, 224, 0.2);
  background-color: #212529da;
  padding: 1rem;
  width: 450px;
  height: 500px;
  min-width: 200px;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.loginText {
  text-align: center;
  color: #fff;
  padding-bottom: 1.5rem;
}

.loginText p {
  padding: 0 3rem;
  color: hsla(0, 0%, 100%, 0.815);
}
.loginText h2 {
  font-size: 30px;
}

.loginWrapper form input {
  padding: 0.75rem;
  width: 20rem;
  border: unset;
  border-radius: 4px;
  margin: 0.2rem;
  font-size: 18px;
}
.loginWrapper button {
  background-color: #212529da;
  border: 1px solid #fff;
  border-radius: 4px;
  color: #fff;
  padding: 0.75rem;
  font-size: 18px;
  margin-bottom: 2rem;
}

.loginWrapper button:hover {
  color: #212529da;
  background-color: #fff;
  transition: all 0.45s ease;
}

.formLink span:last-child {
  font-weight: bold;
}

.formLink,
.loginText p {
  font-size: large;
}

.formLink span:first-child {
  color: hsla(0, 0%, 100%, 0.815);
}
</style>
