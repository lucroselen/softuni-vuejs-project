import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      isAuthenticated: false,
      id: null,
      email: null,
    };
  },
  actions: {
    setProfile(id, email) {
      this.id = id;
      this.email = email;
      this.isAuthenticated = true;
      localStorage.setItem("id", id);
      localStorage.setItem("email", email);
    },

    getPersistedProfile() {
      const persisted = localStorage.getItem("id");
      if (!persisted) return;
      this.id = localStorage.getItem("id");
      this.email = localStorage.getItem("email");
      this.isAuthenticated = true;
    },
    logout() {
      this.isAuthenticated = false;
      this.email = null;
      this.id = null;
      localStorage.removeItem("id");
      localStorage.removeItem("email");
    },
  },
});
