<script setup lang="ts">

const videoOpen = ref(false)

function openVideo() {
    videoOpen.value = true
}
function closeVideo() {
    videoOpen.value = false
}

</script>

<template>
    <section class="min-h-screen bg-gradient-to-br from-emerald-900 via-blue-900 to-purple-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
            <a href="#"
                class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-emerald-200 bg-gray-800 rounded-full hover:bg-gray-700"
                role="alert">
                <span class="text-xs bg-emerald-600 rounded-full text-white px-4 py-1.5 mr-3"> Doc </span>
                <span class="text-sm font-medium"> Documentacion sobre TDD y Vitest</span>
                <svg class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clip-rule="evenodd"></path>
                </svg>
            </a>
            <div class="flex w-full m-3/4 justify-center">
                <img src="@/assets/svg/logo.svg" alt="Logo" class="h-40 w-auto">
                <img src="@/assets/svg/nuxt.svg" alt="Logo" class="h-40 w-auto">
            </div>
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                Testing TDD - Vitest - Vue.js</h1>
            <p class="mb-8 text-lg font-normal text-gray-200 lg:text-xl sm:px-16 xl:px-48">
                Recopilación completa de recursos para dominar testing: ejercicios prácticos, katas TDD,
                ejemplos con Vitest + Vue.js, videotutoriales y mejores prácticas para pruebas unitarias
            </p>
            <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                <a href="#"
                    class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 focus:ring-4 focus:ring-emerald-800">
                    Empezar
                    <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </a>
                            <VideoButton  @open="openVideo" />
            <VideoModal  :isOpen="videoOpen" @close="closeVideo" />
            </div>



            <div class="px-4 mt-10 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
                <span class="font-semibold text-emerald-400 uppercase">Contenido</span>
                <div class="flex flex-wrap justify-center items-center mt-8 text-gray-300 sm:justify-between">
                    <a href="#" class="mr-5 mb-5 lg:mb-0 hover:text-emerald-300">
                        <div class="flex items-center flex-col">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span class="text-xs mt-1">Pruebas Unitarias</span>
                        </div>
                    </a>
                    <a href="#" class="mr-5 mb-5 lg:mb-0 hover:text-blue-300">
                        <div class="flex items-center flex-col">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            <span class="text-xs mt-1">Katas TDD</span>
                        </div>
                    </a>
                    <a href="#" class="mr-5 mb-5 lg:mb-0 hover:text-purple-300">
                        <div class="flex items-center flex-col">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            <span class="text-xs mt-1">Vitest</span>
                        </div>
                    </a>
                    <a href="#" class="mr-5 mb-5 lg:mb-0 hover:text-emerald-300">
                        <div class="flex items-center flex-col">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            <span class="text-xs mt-1">Videotutoriales</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>

</template>
