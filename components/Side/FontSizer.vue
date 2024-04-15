<template>
  <div class="container">
    <label class="labelBox">
      <input type="checkbox" value="1" @click="toggleFontSizes($event)" /><span
        >Aa</span
      >
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      originalFontSize: null, // Store the original font size
    };
  },
  methods: {
    toggleFontSizes(event) {
      if (event.target.checked) {
        this.increaseFontSize(); // If switch is checked, increase font size
      } else {
        this.resetFontSize(); // If switch is unchecked, reset font size
      }
    },
    increaseFontSize() {
      // Increase font size
      const elements = document.querySelectorAll("*");
      elements.forEach((element) => {
        const computedStyle = window.getComputedStyle(element);
        const currentFontSize = parseInt(computedStyle.fontSize);
        if (!isNaN(currentFontSize)) {
          // Multiply current font size by 1.15
          const newFontSize = currentFontSize * 1.15 + "px";
          element.style.fontSize = newFontSize;
        }
      });
    },
    resetFontSize() {
      // Reset font size to original
      if (this.originalFontSize === null) {
        // If originalFontSize is not yet set, find and store it
        const bodyComputedStyle = window.getComputedStyle(document.body);
        this.originalFontSize = parseInt(bodyComputedStyle.fontSize);
      }
      const elements = document.querySelectorAll("*");
      elements.forEach((element) => {
        element.style.fontSize = this.originalFontSize + "px"; // Reset to original font size
      });
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
  background-color: white;
  color: black;
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
  color: black;
  padding: 15px 20px;
  transition-duration: 500ms;
}

.container input:checked + span {
  color: #ffffff;
}

.container input:checked + span {
  background-color: green;
}

.container input:hover + span {
  background-color: rgb(0, 230, 0);
  color: white;
  transition-duration: 500ms;
}
</style>
