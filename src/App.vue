<template>
  <div id="app">
    <Header />
    <Catalog />
    <Footer />
  </div>
</template>

<style></style>
<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Catalog from "./components/Catalog";

export default {
  components: { Catalog, Footer, Header },
  data: () => ({
    selected: "cards",
  }),
};
</script>
