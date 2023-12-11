<script>
import PageFooter from "./components/PageFooter.vue";
import PageHeader from "./components/PageHeader.vue";
import Loader from "./components/Loader.vue";

export default {
  components: {
    PageFooter,
    PageHeader,
    Loader,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  created() {
    this.handleIsLoading;
  },
  methods: {
    handleIsLoading(isLoading) {
      this.isLoading = isLoading;
    },
  },
};
</script>

<template>
  <PageHeader @is-loading="handleIsLoading" />
  <Loader v-if="isLoading"></Loader>
  <main v-else>
    <router-view />
  </main>
  <PageFooter />
</template>
