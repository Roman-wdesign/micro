<template>
  <div class="item__catalog">
    <div class="item__catalog-card"></div>
  </div>
</template>

<script>
export default {
  name: "Catalog-item",
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
