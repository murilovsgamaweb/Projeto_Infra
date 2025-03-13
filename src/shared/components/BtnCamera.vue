<template>
  <button
    class="absolute inset-y-0 right-0 px-3 flex items-center text-white rounded-[15px] focus:outline-none focus:ring-2 focus:ring-opacity-50 transition duration-200 hover:bg-[]"
    style="background-color: #FF9900;"
  >
    <i class="material-icons">camera_alt</i>
  </button>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
  link.rel = 'stylesheet';
  document.head.appendChild(link);
});
</script>


