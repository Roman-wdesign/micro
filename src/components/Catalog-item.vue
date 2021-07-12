<template>
  <div class="item__catalog">
    <div class="item__catalog-card">
      <button class="item__catalog__add_btn btn">
        <span class="material-icons md-18">cancel</span>
      </button>
      <p>{{ animal_data.category }}</p>
      <p>{{ animal_data.filesize }} KB</p>

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
};
</script>
<style scoped></style>
