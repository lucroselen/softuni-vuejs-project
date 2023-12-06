<script>
import PageFooter from "./views/PageFooter.vue";
import PageHeader from "./views/PageHeader.vue";

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
