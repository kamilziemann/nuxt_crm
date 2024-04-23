<template>
  <div class="width-[40px] leading-3 content-center">
    <label
      :class="{
        'bg-green-500 text-green-800 hover:bg-base-100': isChecked,
        'bg-base-100': !isChecked,
      }"
      class="text-bg-base-content rounded-xl overflow-hidden float-left hover:bg-green-500 hover:text-green-800 duration-500 px-7 py-2"
    >
      <input
        type="checkbox"
        value="1"
        class="sr-only"
        @click="toggleFontSizes($event)"
      /><span class="text-center flex">Aa</span>
    </label>
  </div>
</template>

<script setup()>
export default {
  data() {
    return {
      isChecked: false,
    };
  },
  methods: {
    toggleFontSizes(event) {
      const rootElement = document.documentElement;
      this.isChecked = event.target.checked;
      if (event.target.checked) {
        rootElement.classList.add("large-font");
      } else {
        rootElement.classList.remove("large-font");
      }
    },
  },
};
</script>
<style>
.large-font {
  font-size: 1.3em;
}
</style>
