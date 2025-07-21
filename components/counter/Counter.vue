<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <button
    class="px-4 py-2 rounded-lg bg-emerald-500 text-white font-medium hover:bg-emerald-600 focus:outline-none focus:ring-4 focus:ring-emerald-800 transition-colors duration-200"
    @click="count++"
  >
    Clicked {{ count }} times
  </button>
</template>