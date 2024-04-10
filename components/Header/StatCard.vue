<template>
  <div class="stat p-4">
    <div
      :class="`stat-figure flex items-center justify-center rounded-full bg-gradient-to-br ${colorFromTo} ${width} ${height} ${isHidden ? 'hidden' : ''}`">
      <component :is="SvgComponent" />
    </div>
    <div :class="`stat-title ${titleColor}`">{{ title }}</div>
    <div :class="`stat-value text-3xl ${valueColor}`">{{ value }}</div>
    <div :class="`stat-desc ${descColor} ${isDescHidden ? 'hidden' : ''}`">{{ description }}</div>
  </div>
</template>

<script setup>

const props = defineProps({
  title: String,
  value: Number,
  description: String,
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
    default: 'text-gray-700'
  },
  valueColor: {
    type: String,
    default: 'text-primary text-3xl'
  },
  descColor: {
    type: String,
    default: 'text-gray-500'
  },
  hideAtWidth: {
    type: Number,
    default: 839
  },
  hideDescAtWidth: {
    type: Number,
    default: 610
  }
});

const isHidden = ref(false);
const isDescHidden = ref(false);

const updateVisibility = () => {
  isHidden.value = window.innerWidth <= props.hideAtWidth;
  isDescHidden.value = window.innerWidth <= props.hideDescAtWidth;
};

watchEffect(() => {
  if (typeof window !== 'undefined') {
    updateVisibility();
    window.addEventListener('resize', updateVisibility);
    onUnmounted(() => {
      window.removeEventListener('resize', updateVisibility);
    });
  }
});

const SvgComponent = computed(() => defineAsyncComponent(() => import(`../Svg/${props.svg}.vue`)));
</script>