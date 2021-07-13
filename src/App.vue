<template>
  <div id="app">
    <Header />
    <div class="radio">
      <input type="radio" value="cards" view v-model="selected" />cards view<br />
      <input type="radio" value="tree" view v-model="selected" />tree view<br />
      <p>Выбрано: {{ selected }}</p>
    </div>
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
