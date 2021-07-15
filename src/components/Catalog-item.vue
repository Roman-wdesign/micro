<template>
  <div class="item__catalog">
    <div class="item__catalog-card">
      <button class="item__catalog__add_btn btn" @click="clickRemoveCard">
        <span class="material-icons md-18">cancel</span>
      </button>
      <p>{{ animal_data.category }}</p>
      <p>{{ animal_data.filesize }} KB</p>
      <p>{{ animal_data.timestamp }}</p>

      <div class="img">
        <img
          class="item__catalog-img"
          :src="'http://contest.elecard.ru/frontend_data/' + animal_data.image"
          alt="img"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Catalog-item",

  data: () => ({}),

  props: {
    animal_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    ...mapGetters(["ANIMALS"]),
  },
  methods: {
    ...mapActions(["GET_ANIMALS_FROM_API"]),
    clickRemoveCard(animal) {
      this.ANIMALS.splice(animal, 1);
    },
  },
};
</script>
<style scoped></style>
