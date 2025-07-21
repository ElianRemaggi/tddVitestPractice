<script setup lang="ts">
interface MenuItem {
  name: string
  url: string
}

// Importa los datos del JSON
import menuItems from '~/components/menu/menuItems.json'

// Usa los datos importados directamente
const menuitem = ref<MenuItem[]>(menuItems)
</script>
<template>
  <header class="bg-gradient-to-r from-emerald-900 to-blue-900 shadow-[0_4px_12px_-2px_rgba(52,211,153,0.3)]">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">

      <NuxtLink v-for="item in menuitem" :key="item.url" 
        :to="item.url"
        class="flex flex-1 justify-center mx-auto text-sm font-semibold text-white hover:text-emerald-300
        transition-colors duration-200"
        >
        {{ item.name }}
      </NuxtLink>
    </nav>
  </header>
</template>