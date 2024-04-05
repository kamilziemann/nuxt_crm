<template>
  <div class="stat p-4">
    <div
        :class="`stat-figure flex items-center justify-center rounded-full bg-gradient-to-br ${colorFromTo} ${width} ${height} hidden ${breakpoint}`">
        <component :is="SvgComponent" />
    </div>

    <div :class="`stat-title ${titleColor}`">{{ title }}</div>
    <div :class="`stat-value text-3xl ${valueColor}`">{{ value }}</div>
    <div :class="`stat-desc ${descColor}`">{{ description }}</div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';
import { defineAsyncComponent } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: 'title="type title here"'
  },
  value: {
    type: Number,
    default: 0
  },
  description: {
    type: String,
    default: 'description="type description here"'
  },
  colorFromTo: {
    type: String,
    default: 'from-purple-300 to-purple-200'
  },
  svg: {
    type: String,
    default: 'ShoppingBasket'  
  },
  width: {
    type: String,
    default: 'w-14'
  },
  height: {
    type: String,
    default: 'h-14'
  },
  titleColor: {
    type: String,
    default: 'stat-title' 
  },
  valueColor: {
    type: String,
    default: 'stat-value text-primary text-3xl"' 
  },
  descColor: {
    type: String,
    default: 'stat-desc'
  },
  breakpoint: {
    type: String,
    default: 'md:flex' // sm-640px, md-768px, lg-1024px, xl-1280px, 2xl-1536px
  }
});

const SvgComponent = computed(() => {
  return defineAsyncComponent(() => import(`../Svg/${props.svg}.vue`));
});
</script>