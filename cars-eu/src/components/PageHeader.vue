<script>
import { mapActions, mapState } from "pinia";
import { logoutUser, getProfile } from "../dataProviders/auth";
import { useUserStore } from "../store/userStore";

export default {
  setup() {
    const userStore = useUserStore();
    return { userStore };
  },
  data() {
    return {
      profile: {},
    };
  },
  async created() {
    await this.loadData();
  },

  computed: {
    ...mapState(useUserStore, ["isAuthenticated", "id"]),
  },
  methods: {
    ...mapActions(useUserStore, ["logout"]),

    async loadData() {
      this.profile = await getProfile();
    },
    async handleLogout() {
      this.logout();
      await logoutUser();
      this.$router.push("/user/login");
    },
  },
};
</script>

<template>
  <header>
    <div class="navbar-brand">CARS EU</div>
    <nav>
      <ul>
        <li>
          <router-link to="/"> Home </router-link>
        </li>
        <li>
          <router-link to="/all-cars"> All Cars </router-link>
        </li>
        <li>
          <router-link to="/top-10"> Top 10 Cars </router-link>
        </li>
        <li>
          <router-link to="/find-us"> Find Us </router-link>
        </li>
        <li v-if="isAuthenticated">
          <router-link to="/user/profile"> My Profile </router-link>
        </li>
        <li v-if="isAuthenticated">
          <router-link to="/add"> Add a Car </router-link>
        </li>
        <li v-if="isAuthenticated">
          <a @click.prevent="handleLogout" href="javascript:void(0);">
            Logout
          </a>
        </li>

        <li class="auth" v-if="!isAuthenticated">
          <router-link to="/user/login"> Login </router-link>
        </li>
        <li v-if="!isAuthenticated">
          <router-link to="/user/register"> Register </router-link>
        </li>
      </ul>
    </nav>
    <div class="welcome" v-if="isAuthenticated">
      <span>Welcome, </span>
      <router-link to="/user/profile">
        {{ profile.firstName }} {{ profile.lastName }}
      </router-link>
    </div>
  </header>
</template>

<style scoped>
.auth {
  margin-left: 26rem;
}
header {
  display: flex;
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  gap: 2rem;
  align-items: center;
  justify-content: space-around;
  background: #212529;
}
header nav ul li a,
header a,
.welcome span {
  text-decoration: none;
  color: hsla(0, 0%, 100%, 0.815);
}

.welcome a {
  font-weight: bold;
}

header nav ul li {
  list-style: none;
}

header nav ul li a:hover,
.welcome a:hover {
  color: #fff;
  border-bottom: 1px solid #fff;
  padding-bottom: 8px;
  transition: all 0.2s ease;
}

header nav ul {
  display: flex;
  gap: 1.75rem;
}

.navbar-brand {
  color: #fff;
  font-size: 28px;
  font-weight: 500;
  letter-spacing: 3px;
}
</style>
