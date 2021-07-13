<template>
  <div class="select">
    <p class="select__title" @click="areOptionsVisible = !areOptionsVisible">
      {{ selected }}
    </p>

    <div class="select__options" v-if="areOptionsVisible || isExpanded">
      <p
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
      >
        {{ option.name }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sorting",
  props: {
    options: {
      type: Array,
      default() {
        return [];
      },
    },
    selected: {
      type: String,
      default: "",
    },
    isExpanded: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    areOptionsVisible: false,
  }),
  methods: {
    selectOption(option) {
      this.$emit("select", option);
      this.areOptionsVisible = false;
    },
    hideSelect() {
      this.areOptionsVisible = false;
    },
  },
  mounted() {
    document.addEventListener("click", this.hideSelect.bind(this), true);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.hideSelect);
  },
};
</script>

<style></style>
