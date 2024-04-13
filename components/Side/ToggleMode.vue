<template>
  <body mode="isDark ? 'dark' : 'light'">
    <label class="switch">
      <input type="checkbox" @click="ToggleDark()" />
      <span class="slider round"></span>
    </label>
  </body>
</template>
<script setup>
import { useDark, useToggle } from "@vueuse/core";

const isDark = useDark({
  selector: "body",
  attribute: "mode",
  valueDark: "dark",
  valueLight: "light",
});
const ToggleDark = useToggle(isDark);
</script>
<style>
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
[mode="dark"] {
  background-color: rgb(57, 57, 57);
  color: rgb(228, 228, 228);
}
[mode="light"] {
  background-color: rgb(228, 228, 228);
  color: rgb(57, 57, 57);
}
</style>
