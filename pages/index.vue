<script setup>
import SummariesHeader from '../components/Header/SummariesHeader.vue'
import Sidebar from '../components/Side/Bar.vue'
</script>

<template>
  <div class="layout">
    <Sidebar class="layout-sidebar"/>
    <div class="layout-content">
      <SummariesHeader/>
      <div class="p-4">
        <!-- Content goes here -->
      </div>    
    </div>
  </div>
</template>

<style scoped lang="scss">
.layout {
  display: flex;
  min-height: 100vh;
}

.layout-content {
  flex-grow: 1;
}
</style>