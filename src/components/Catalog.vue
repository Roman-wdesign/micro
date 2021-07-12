<template>
  <div class="catalog">
    <div class="catalog__container_currency">
      <CatalogItem
        v-for="(animal, id) in paginatedAnimals"
        :key="id"
        :category="animal.category"
        :timestamp="animal.timestamp"
        :filesize="animal.filesize"
        :image="animal.image"
        :animal_data="animal"
      />
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
    </div>
  </div>
</template>

<script>
import CatalogItem from "./Catalog-item";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Catalog",
  components: { CatalogItem },
  data: () => ({
    animalsOnPage: 50,
    pageFirst: 1,
  }),

  computed: {
    ...mapGetters(["ANIMALS"]),
    pages() {
      return Math.ceil(this.ANIMALS.length / 10);
    },
    paginatedAnimals() {
      let from = (this.pageFirst - 1) * this.animalsOnPage;
      let to = from + this.animalsOnPage;
      return this.ANIMALS.slice(from, to);
    },
  },
  methods: {
    ...mapActions(["GET_ANIMALS_FROM_API"]),
    pageChangeClick(page) {
      this.pageFirst = page;
    },
  },
  mounted() {
    this.GET_ANIMALS_FROM_API();
  },
  pageChangeClick(page) {
    this.pageFirst = page;
  },
};
</script>
<style></style>
