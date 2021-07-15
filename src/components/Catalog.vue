<template>
  <div class="catalog">
    <div class="sorting_section">
      <div class="radio">
        <input type="radio" value="cards" v-model="button_selected" />cards
        view<br />
        <input type="radio" value="tree" v-model="button_selected" />tree
        view<br />
        <p>Выбрано: {{ button_selected }}</p>
      </div>
      <div class="reset__button">
        <button class="reset__button_btn">Reset pages to default</button>
      </div>
      <Sorting
        :selected="selected"
        :options="categories"
        @select="sortByCategory"
      />
    </div>
    <div class="catalog__pagination">
      <button
        class="catalog__pagination__page"
        v-for="page in pages"
        :key="page"
        :class="{ catalog__pagination__page__selected: page === pageFirst }"
        @click="pageChangeClick(page)"
      >
        {{ page }}
      </button>
    </div>
    <div class="catalog__container_currency">
      <CatalogItem
        v-for="(animal, value) in filteredAnimals"
        :key="value"
        :category="animal.category"
        :timestamp="animal.timestamp"
        :filesize="animal.filesize"
        :image="animal.image"
        :animal_data="animal"
      />
    </div>
  </div>
</template>

<script>
import CatalogItem from "./Catalog-item";
import { mapActions, mapGetters } from "vuex";
import Sorting from "./Sorting";

export default {
  name: "Catalog",
  components: { Sorting, CatalogItem },
  data: () => ({
    animalsOnPage: 13,
    pageFirst: 1,
    categories: [
      { name: "animals", value: "animals" },
      { name: "business", value: "business" },
      { name: "health", value: "health" },
      { name: "winter", value: "winter" },
      { name: "food", value: "food" },
      { name: "places", value: "places" },
      { name: "science", value: "science" },
      { name: "vehicle", value: "vehicle" },
      { name: "All", value: "All" },
    ],
    selected: "All",
    button_selected: "cards",
    sortedAnimals: [],
  }),

  computed: {
    ...mapGetters(["ANIMALS"]),
    pages() {
      return Math.ceil(this.ANIMALS.length / 13);
    },
    paginatedAnimals() {
      let from = (this.pageFirst - 1) * this.animalsOnPage;
      let to = from + this.animalsOnPage;
      return this.ANIMALS.slice(from, to);
    },
    filteredAnimals() {
      if (this.sortedAnimals.length) {
        return this.sortedAnimals;
      } else if (this.paginatedAnimals.length) {
        return this.paginatedAnimals;
      } else {
        return this.ANIMALS;
      }
    },
  },
  methods: {
    ...mapActions(["GET_ANIMALS_FROM_API"]),
    pageChangeClick(page) {
      this.pageFirst = page;
    },
    sortByCategory(category) {
      this.sortedAnimals = [];
      let vm = this;
      this.ANIMALS.map(function (item) {
        if (item.category === category.name) {
          vm.sortedAnimals.push(item);
        }
      });
    },
  },
  mounted() {
    this.GET_ANIMALS_FROM_API();
  },
};
</script>
<style></style>
