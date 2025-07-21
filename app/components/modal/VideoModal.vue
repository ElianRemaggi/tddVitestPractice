<script setup lang="ts">
const props = defineProps<{ isOpen: boolean }>()
const emit = defineEmits<{ (e: 'close'): void }>()
</script>

<template>
    <Teleport to="body">
        <transition name="fade">
            <div v-if="props.isOpen"
                class="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                <!-- WRAPPER: se usa para posicionar el botón por fuera del card -->
                <div class="relative w-full max-w-3xl">
                    <!-- BOTÓN CERRAR -->
                    <button aria-label="Cerrar video" class="absolute -right-6 -top-6 flex h-11 w-11 items-center justify-center
                   rounded-full bg-emerald-300 text-gray-700 text-xl font-bold shadow-lg
                   ring-2 ring-gray-300 hover:bg-emerald-500 hover:text-white
                   focus:outline-none focus:ring-4 focus:ring-emerald-800" @click="emit('close')">
                        ✕
                    </button>

                    <!-- CARD CON EL IFRAME -->
                    <div class="overflow-hidden rounded-2xl bg-black shadow-xl">
                        <div class="aspect-video w-full">
                            <iframe class="h-full w-full"
                                src="https://www.youtube.com/embed/_t9l2TwGioc?rel=0&modestbranding=1"
                                title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen />
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </Teleport>
</template>

<style scoped >
.fade-enter-active,
.fade-leave-active {
    @apply transition-opacity duration-300;
}

.fade-enter-from,
.fade-leave-to {
    @apply opacity-0;
}
</style>
