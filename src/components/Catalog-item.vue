<template>
  <div class="item__catalog">
    <div class="item__catalog-card">
      <p>{{ animal_data.category }}</p>
      <p>1</p>
      <div class="item__catalog-img"></div>
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
