<template>
  <div class="catalog">
    <div class="catalog__container_currency">
      <CatalogItem
        v-for="(animal, id) in ANIMALS"
        :key="id"
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

export default {
  name: "Catalog",
  components: { CatalogItem },
  data: () => ({}),

  computed: {
    ...mapGetters(["ANIMALS"]),
  },
  methods: {
    ...mapActions(["GET_ANIMALS_FROM_API"]),
  },
  mounted() {
    this.GET_ANIMALS_FROM_API();
  },
};
</script>

<style scoped></style>
