<template>
    <div :class="containerClasses">
        <div :class="statsClasses">
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
import { computed, defineProps, onMounted, onUnmounted, ref, watchEffect } from 'vue';

const props = defineProps({
    vertical: {
        type: Boolean,
        default: false,
    },
    shadow: {
        type: Boolean,
        default: true,
    },
    bgColor: {
        type: String,
        default: 'bg-white',
    },
    breakpoint: {
        type: Number, // Width at which the container switches to vertical layout
        default: 495,
    }
});

const isVertical = ref(props.vertical);

// Function to update the orientation based on the window width
const updateOrientation = () => {
    if (typeof window !== 'undefined') {
        isVertical.value = props.vertical || window.innerWidth <= props.breakpoint;
    }
};

// Watch for changes in the window width and update the orientation
watchEffect(() => {
    updateOrientation();
});
onMounted(() => {
    window.addEventListener('resize', updateOrientation);
});
onUnmounted(() => {
    window.removeEventListener('resize', updateOrientation);
});

const containerClasses = computed(() => [
    props.marginTop,
    'flex',
    'justify-center',
]);

const statsClasses = computed(() => [
    'stats',
    isVertical.value ? 'stats-vertical' : 'stats-horizontal', 
    props.shadow ? 'shadow' : '',
    props.bgColor,
]);
</script>