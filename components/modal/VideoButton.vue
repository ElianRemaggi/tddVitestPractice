<script setup lang="ts">
/**
 * Emite el evento `open` para que el padre muestre el modal.
 */
const emit = defineEmits<{
  (e: 'open'): void
}>()
</script>

<template>
  <button
    class="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-emerald-500 to-blue-600 px-5 py-3 text-white font-medium hover:from-emerald-600 hover:to-blue-700 focus:outline-none focus:ring-4 focus:ring-emerald-800"
    @click="emit('open')"
  >
    ▶️ Ver video
  </button>
</template>
