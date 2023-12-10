import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      isAuthenticated: false,
      profile: null,
      id: null,
    };
  },
  actions: {
    setProfile(profileData) {
      this.profile = profileData;
      this.isAuthenticated = true;
      localStorage.setItem("user-profile", JSON.stringify(profileData));
      this.id = JSON.parse(localStorage.getItem("user-profile")).id;
    },

    getPersistedProfile() {
      const persisted = localStorage.getItem("user-profile");
      if (!persisted) return;
      this.profile = JSON.parse(persisted);
      this.isAuthenticated = true;
      this.id = JSON.parse(localStorage.getItem("user-profile")).id;
    },
    logout() {
      this.isAuthenticated = false;
      this.profile = null;
      this.id = null;
      localStorage.removeItem("user-profile");
    },
  },
});
