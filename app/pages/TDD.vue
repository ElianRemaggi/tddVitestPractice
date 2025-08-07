<script setup lang="ts">
useHead({
  title: 'What is TDD?',
  meta: [
    { name: 'description', content: 'Discover the benefits of Test-Driven Development (TDD) and how it can improve your code quality.' },
    { name: 'keywords', content: 'TDD, Test-Driven Development, software development, testing, code quality' }
  ]
})
</script>
<template>
    <div class="min-h-screen mt-20">

        <DotBackground class="absolute top-0 left-0 w-full h-full" />


        <div class=" text-white antialiased">
            <main class="flex flex-col items-center justify-center h-full px-6">
                <!-- Tarjeta -->
                <article
                    class="w-full max-w-3xl rounded-xl bg-gray-800/70 backdrop-blur-sm p-8 shadow-xl ring-1 ring-gray-700">
                    <h1 class="mb-6 text-3xl font-bold text-emerald-400">¿Qué es TDD?</h1>
                    <p class="mb-4 leading-relaxed">
                        <strong>Test-Driven Development</strong> es una práctica de desarrollo en
                        la que escribes primero una prueba <em>(test)</em> que falla,
                        implementas el código mínimo para que pase y finalmente refactorizas
                        asegurando que la prueba siga verde.
                    </p>

                    <h2 class="mt-8 mb-4 text-2xl font-semibold text-emerald-300">
                        Ciclo <span class="italic">Red → Green → Refactor</span>
                    </h2>
                    <ol class="list-decimal ml-5 space-y-2">
                        <li>
                            <span class="text-red-400 font-medium">Rojo:</span> escribe un test
                            para una función nueva o un caso límite; debe fallar.
                        </li>
                        <li>
                            <span class="text-green-400 font-medium">Verde:</span> implementa la
                            mínima lógica que haga pasar el test.
                        </li>
                        <li>
                            <span class="text-indigo-400 font-medium">Refactor:</span> mejora el
                            diseño del código con libertad, manteniendo el test en verde.
                        </li>
                    </ol>

                    <h2 class="mt-8 mb-4 text-2xl font-semibold text-emerald-300">
                        Beneficios clave
                    </h2>
                    <ul class="list-disc ml-5 space-y-2">
                        <li>Código más modular y mantenible.</li>
                        <li>Documentación viva: los tests describen el comportamiento.</li>
                        <li>
                            Confianza para refactorizar y añadir funcionalidades sin romper
                            lo existente.
                        </li>
                        <li>
                            Feedback rápido: errores detectados en segundos, no en producción.
                        </li>
                    </ul>

                    <h2 class="mt-8 mb-4 text-2xl font-semibold text-emerald-300">
                        Buenas prácticas
                    </h2>
                    <ul class="list-disc ml-5 space-y-2">
                        <li>Escribe tests pequeños y enfocados a un solo comportamiento.</li>
                        <li>Nombrado claro: el test debe explicar qué espera.</li>
                        <li>
                            Usa <span class="italic">mocks</span> solo cuando sea necesario
                            aislar dependencias externas.
                        </li>
                        <li>
                            Mantén el ciclo rápido: <code>&lt;10 s</code> es lo ideal para toda
                            la suite en CI.
                        </li>
                    </ul>

                    <h2 class="mt-8 mb-4 text-2xl font-semibold text-emerald-300">
                        Documentación
                    </h2>

                    <ul class="list-disc ml-6 space-y-2">
                        <li>
                            <a href="https://www.codurance.com/es/guia-completa-desarrollo-guiado-por-pruebas-tdd"
                                target="_blank" rel="noopener"
                                class="hover:text-emerald-400 transition-colors duration-200">
                                Guía completa de TDD – Codurance
                            </a>
                        </li>

                        <li>
                            <a href="https://blog.irontec.com/primeros-pasos-con-tdd-i/" target="_blank" rel="noopener"
                                class="hover:text-emerald-400 transition-colors duration-200">
                                Tutorial “Primeros pasos con TDD (parte 1)” – Irontec
                            </a>
                        </li>

                        <li>
                            <a href="https://cdn.bookey.app/files/pdf/book/es/desarrollo-guiado-por-pruebas.pdf"
                                target="_blank" rel="noopener"
                                class="hover:text-emerald-400 transition-colors duration-200">
                                “Desarrollo guiado por pruebas” – Kent Beck (PDF)
                            </a>
                        </li>
                    </ul>



                    <footer class="mt-10 text-sm text-gray-400">
                        Empieza con algo sencillo ― por ejemplo, la clásica kata
                        <em>FizzBuzz</em> ― y practica el ciclo TDD hasta que sea natural.
                    </footer>

                </article>
            </main>
        </div>
    </div>
</template>

<style scoped></style>
