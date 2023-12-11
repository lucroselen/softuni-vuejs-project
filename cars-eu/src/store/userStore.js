import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      isAuthenticated: false,
      id: null,
    };
  },
  actions: {
    setProfile(id) {
      this.id = id;
      this.isAuthenticated = true;
      localStorage.setItem("id", id);
    },

    getPersistedProfile() {
      const persisted = localStorage.getItem("id");
      if (!persisted) return;
      this.id = localStorage.getItem("id");
      this.isAuthenticated = true;
    },
    logout() {
      this.isAuthenticated = false;
      this.profile = null;
      this.id = null;
      localStorage.removeItem("id");
    },
  },
});
