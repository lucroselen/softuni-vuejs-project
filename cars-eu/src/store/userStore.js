import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      isAuthenticated: false,
      profile: null,
    };
  },
  actions: {
    setProfile(profileData) {
      this.profile = profileData;
      this.isAuthenticated = true;
      localStorage.setItem("user-profile", JSON.stringify(profileData));
    },

    getPersistedProfile() {
      const persisted = localStorage.getItem("user-profile");
      if (!persisted) return;
      this.profile = JSON.parse(persisted);
      this.isAuthenticated = true;
    },
    logout() {
      this.isAuthenticated = false;
      this.profile = null;
      localStorage.removeItem("user-profile");
    },
  },
});
