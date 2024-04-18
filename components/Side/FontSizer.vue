<template>
  <div class="container">
    <label class="labelBox">
      <input
        type="checkbox"
        value="1"
        class="btn flex"
        @click="toggleFontSizes($event)"
      /><span>Aa</span>
    </label>
  </div>
</template>

<script>
export default {
  methods: {
    toggleFontSizes(event) {
      const rootElement = document.documentElement;
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
body {
  font-family: sans-serif;
  margin: 0 auto;
  text-align: center;
}
.container {
  width: 40px;
}
.labelBox {
  background-color: oklch(var(--b1));
  color: klch(var(--bc));
  border-radius: 12px;
  overflow: hidden;
  float: left;
}

.container label {
  float: left;
  line-height: 12px;
}

.container label span {
  text-align: center;
  display: block;
}

.container label input {
  position: absolute;
  display: none;
}
.container label input + span {
  color: klch(var(--bc));
  padding: 15px 20px;
  transition-duration: 500ms;
}

.container input:checked + span {
  color: klch(var(--bc));
  background-color: oklch(var(--b1));
}

.container input:hover + span {
  background-color: oklch(var(--b1));
  color: klch(var(--bc));
  transition-duration: 500ms;
}

.large-font {
  font-size: 1.3em;
}
</style>
