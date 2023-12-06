<script>
import { mapActions } from "pinia";
import { registerUser } from "../dataProviders/auth";
import { useUserStore } from "../store/userStore";

export default {
  data() {
    return {
      userData: {
        firstName: "",
        lastName: "",
        password: "",
        rePassword: "",
        email: "",
      },
    };
  },
  methods: {
    ...mapActions(useUserStore, ["setProfile"]),

    async onSubmit() {
      const userData = await registerUser(this.userData);
      if (userData) {
        this.setProfile(userData);
        this.$router.push("/all-cars");
      }
    },
  },
};
</script>

<template>
  <div class="registerContainer">
    <div class="registerWrapper">
      <div class="registerText">
        <h2>REGISTER</h2>
        <p>Let's get you on board!</p>
      </div>
      <form @submit.prevent="onSubmit">
        <input
          v-model="userData.firstName"
          type="text"
          name="firstName"
          placeholder="First Name"
        />
        <input
          v-model="userData.lastName"
          type="text"
          name="lastName"
          placeholder="Last Name"
        />
        <input
          v-model="userData.email"
          type="email"
          name="email"
          placeholder="Email Address"
        />
        <input
          v-model="userData.password"
          type="password"
          name="password"
          placeholder="Password"
        />
        <input
          v-model="userData.rePassword"
          type="password"
          name="rePassword"
          placeholder="Repeat Password"
        />
        <button>Register</button>
      </form>
      <div class="formLink">
        <span>Already have an account?</span>
        <span><router-link to="/user/login">Sign In</router-link></span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.registerContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100vw;
  height: calc(100vh - (53px + 38px));
  margin-top: 53px;
  margin-bottom: 38px;
}

.registerContainer form {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.registerContainer a,
.registerContainer span {
  color: #fff;
  padding-inline: 0.25rem;
}

.registerContainer button {
  margin: 1rem;
}

.registerWrapper {
  border: #212529da solid 1px;
  border-radius: 5%;
  -webkit-box-shadow: 0px 10px 1000px -7px #000000,
    0px 3px 12px 6px rgba(224, 224, 224, 0.2);
  box-shadow: 0px 10px 1000px -7px #000000,
    0px 3px 12px 6px rgba(224, 224, 224, 0.2);
  background-color: #212529da;
  padding: 1rem;
  width: 450px;
  min-width: 200px;
  min-height: 620px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.registerText {
  text-align: center;
  color: #fff;
  padding-bottom: 1.5rem;
}

.registerText p {
  padding: 0 3rem;
  color: hsla(0, 0%, 100%, 0.815);
}
.registerText h2 {
  font-size: 30px;
}

.registerWrapper form input {
  padding: 0.75rem 10rem 0.75rem 0.75rem;
  border: unset;
  border-radius: 4px;
  margin: 0.2rem;
  font-size: 18px;
}
.registerWrapper button {
  background-color: #212529da;
  border: 1px solid #fff;
  border-radius: 4px;
  color: #fff;
  padding: 0.75rem;
  font-size: 18px;
  margin-bottom: 2rem;
}

.registerWrapper button:hover {
  color: #212529da;
  background-color: #fff;
  transition: all 0.45s ease;
}

.formLink span:last-child {
  font-weight: bold;
}

.formLink,
.registerText p {
  font-size: large;
}

.formLink span:first-child {
  color: hsla(0, 0%, 100%, 0.815);
}
</style>
