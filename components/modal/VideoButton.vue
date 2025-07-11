<template>
    <button @click="openModal"
        class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-gray-600 hover:bg-gray-700/50 focus:ring-4 focus:ring-gray-800 transition-colors duration-200">
        <svg class="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z">
            </path>
        </svg>
        Basado en
    </button>
</template>

<script setup lang="ts">
const emit = defineEmits(['openModal']);

const openModal = () => {
    emit('openModal');
};
</script>