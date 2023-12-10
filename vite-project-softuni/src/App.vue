<script>
import PageFooter from "./components/PageFooter.vue";
import PageHeader from "./components/PageHeader.vue";

export default {
  components: {
    PageFooter,
    PageHeader,
  },
};
</script>

<template>
  <PageHeader />
  <main>
    <router-view />
  </main>
  <PageFooter />
</template>
