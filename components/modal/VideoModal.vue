<template>
    <div v-if="isOpen" class="fixed inset-0 z-50 overflow-y-auto">
        <div class="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <!-- Fondo oscuro -->
            <div class="fixed inset-0 transition-opacity" aria-hidden="true">
                <div class="absolute inset-0 bg-gray-900 opacity-75" @click="closeModal"></div>
            </div>

            <!-- Contenido del Modal -->
            <div class="inline-block align-bottom bg-gradient-to-b from-gray-900 to-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full"
                style="border: 1px solid transparent; background-image: linear-gradient(to right, #064e3b, #1e40af, #5b21b6); border-width: 1px;">
                <div class="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <!-- Header -->
                    <div class="flex justify-between items-center border-b border-gray-700 pb-3">
                        <h3 class="text-xl font-semibold text-emerald-300">
                            Curso de Test Driven Development desde Cero con JavaScript, React y Vitest
                        </h3>
                        <button @click="closeModal" class="text-gray-400 hover:text-emerald-300">
                            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <!-- Video -->
                    <div class="mt-4">
                        <div class="aspect-w-16 aspect-h-9">
                            <iframe class="w-full h-96 rounded-lg" src="https://www.youtube.com/embed/_t9l2TwGioc"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen></iframe>
                        </div>
                    </div>
                </div>

                <!-- Footer -->
                <div class="px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse border-t border-gray-700">
                    <button @click="closeModal"
                        class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-gradient-to-r from-emerald-500 to-blue-600 text-base font-medium text-white hover:from-emerald-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 sm:ml-3 sm:w-auto sm:text-sm transition-colors duration-200">
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    isOpen: {
        type: Boolean,
        required: true
    }
});

const emit = defineEmits(['close']);

const closeModal = () => {
    emit('close');
};
</script>