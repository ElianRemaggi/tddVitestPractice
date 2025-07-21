<script setup lang="ts">

</script>

<template>
    <div class="min-h-screen mt-20 text-white">

        <DotBackground class="absolute top-0 left-0 w-full h-full" />


        <div>
            <main class="flex items-center justify-center min-h-screen px-6">
                <article
                    class="w-full max-w-3xl rounded-xl bg-gray-800/70 backdrop-blur-sm p-8 shadow-xl ring-1 ring-gray-700">
                    <!-- Logo (opcional) -->
                    <img src="@/assets/svg/logo.svg" alt="Vitest logo"
                        class="w-24 mx-auto mb-6 select-none pointer-events-none" />

                    <h1 class="mb-6 text-3xl font-bold text-emerald-400">
                        ¿Qué es Vitest?
                    </h1>
                    <p class="mb-4 leading-relaxed">
                        <strong>Vitest</strong> es un <em>test&nbsp;runner</em> ultrarrápido
                        diseñado para proyectos que usan
                        <a href="https://vitejs.dev" target="_blank" rel="noopener"
                            class="underline hover:text-emerald-400 transition-colors duration-200">Vite</a>. Aprovecha
                        <code>esbuild</code> para compilar los test en
                        milisegundos y ofrece una experiencia similar a Jest, pero con tiempos
                        de arranque y recarga mucho menores.
                    </p>

                    <h2 class="mt-8 mb-4 text-2xl font-semibold text-emerald-300">
                        Características principales
                    </h2> 
                    <ul class="list-disc ml-5 space-y-2">
                        <li>
                            <span class="font-medium text-indigo-300">Velocidad:</span>
                            hot-reloading de pruebas en <code>&lt;300&nbsp;ms</code> incluso en
                            proyectos grandes.
                        </li>
                        <li>
                            <span class="font-medium text-indigo-300">Compatibilidad Jest:</span>
                            API de assertions (<code>expect</code>), snapshots y sintaxis
                            familiar (<code>describe</code>, <code>it</code>).
                        </li>
                        <li>
                            <span class="font-medium text-indigo-300">Cobertura integrada:</span>
                            usa <code>c8</code> e informes HTML sin plugins externos.
                        </li>
                        <li>
                            <span class="font-medium text-indigo-300">Mocking potente:</span>
                            mock de módulos ESM/CJS, <em>spies</em> y temporizadores fake con
                            una sola llamada.
                        </li>
                        <li>UI web interactiva para inspeccionar resultados y snapshots.</li>
                    </ul>

                    <h2 class="mt-8 mb-4 text-2xl font-semibold text-emerald-300">
                        Beneficios frente a otras herramientas
                    </h2>
                    <ul class="list-disc ml-5 space-y-2">
                        <li>
                            <strong>Integración natural con Vite:</strong> comparte la misma
                            configuración (alias, plugins, TS, CSS) sin duplicar ajustes.
                        </li>
                        <li>
                            <strong>Arranque casi instantáneo:</strong> ausente de “transform
                            cache” pesado; ideal para TDD.
                        </li>
                        <li>
                            <strong>Soporte nativo ESM:</strong> cero magia para importar
                            módulos modernos o TypeScript puro.
                        </li>
                        <li>
                            <strong>Plugins de ecosistema:</strong> Vue, React, Svelte, Solid,
                            Preact, Astro y Nuxt 3/4 tienen presets oficiales.
                        </li>
                    </ul>

                    <h2 class="mt-8 mb-4 text-2xl font-semibold text-emerald-300">
                        Comandos esenciales
                    </h2>
                    <pre class="bg-gray-900/60 p-4 rounded-lg text-sm overflow-x-auto shadow-inner"><code># instalar
npm i -D vitest @vitest/ui

# ejecutar en modo watch + UI
npx vitest --ui

# un solo pass (CI)
npx vitest run

# cobertura
npx vitest run --coverage</code></pre>

                    <h2 class="mt-8 mb-4 text-2xl font-semibold text-emerald-300">
                        Ejemplo mínimo
                    </h2>
                    <pre class="bg-gray-900/60 p-4 rounded-lg text-sm overflow-x-auto shadow-inner"><code>// math.test.ts
import { describe, it, expect } from 'vitest'
import { sum } from './math'

describe('sum', () =&gt; {
  it('adds two numbers', () =&gt; {
    expect(sum(2, 3)).toBe(5)
  })
})</code></pre>

                    <h2 class="mt-8 mb-4 text-2xl font-semibold text-emerald-300">
                        Cuándo elegir Vitest
                    </h2>
                    <p class="leading-relaxed">
                        Si tu stack ya usa Vite (Vue 3, React, Svelte, Lit, Astro, Nuxt 3,
                        etc.) y quieres ciclos de TDD rápidos, una API familiar y cobertura
                        integrada, <strong>Vitest</strong> es la opción recomendada en 2025.
                        Reemplaza a Jest sin fricción y se adapta tanto a pruebas unitarias
                        como component tests (con @testing-library, Vue Test Utils, React
                        Testing Library, etc.).
                    </p>

                    <footer class="mt-10 text-sm text-gray-400">
                        Documentación oficial →
                        <a class="underline hover:text-emerald-400 transition-colors duration-200"
                            href="https://vitest.dev" target="_blank" rel="noopener">vitest.dev</a>
                    </footer>
                </article>
            </main>
        </div>
    </div>
</template>


<style scoped></style>