<script>
import PageHome from "./components/PageHome.vue";
import PageFooter from "./components/PageFooter.vue";
import PageHeader from "./components/PageHeader.vue";

export default {
  components: {
    PageHome,
    PageFooter,
    PageHeader,
  },
};
</script>

<template>
  <PageHeader />
  <PageHome />
  <PageFooter />
</template>
