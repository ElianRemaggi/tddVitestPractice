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
                    <img src="@/app/assets/svg/logo.svg" alt="Vitest logo"
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
npm install -D @vue/test-utils happy-dom @nuxt/test-utils vitest playwright-core
                    </code></pre>
                    
                <h4 class="mt-8 mb-4 text-md font-semibold text-emerald-300">
                        Configuramos script de test en package.json
                    </h4>

                    <pre class="bg-gray-900/60 p-4 rounded-lg text-sm overflow-x-auto shadow-inner"><code>
"scripts": {
    "test": "vitest"
}
                    </code></pre>

                    <h4 class="mt-8 mb-4 text-md font-semibold text-emerald-300">
                        Creamos vitest.config.ts
                    </h4>

                    <pre class="bg-gray-900/60 p-4 rounded-lg text-sm overflow-x-auto shadow-inner"><code>
import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
    test: {
        environment: 'happy-dom', 
        globals: true,           
        coverage: {
            reporter: ['text', 'html'],
            all: true
        }
    }
})
</code></pre>
                    <h2 class="mt-8 mb-4 text-sm font-semibold text-emerald-300"> 
                        Tipos de test
                    </h2>
                    <p>

                    </p>

                    <h2 class="mt-8 mb-4 text-sm font-semibold text-emerald-300">
                        Ejemplo Component Test
                    </h2>
                    <pre class="bg-gray-900/60 p-4 rounded-lg text-sm overflow-x-auto shadow-inner"><code>import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Counter from '@/components/counter/Counter.vue'

describe('Counter.vue', () => {
    it('incrementa el contador', async () => {
        const wrapper = await mountSuspended(Counter)
        expect(wrapper.text()).toContain('Clicked 0')
        await wrapper.find('button').trigger('click')
        expect(wrapper.text()).toContain('Clicked 1')
    })
})
</code></pre>

                    <p class="leading-relaxed m-2">
                        Para correr los test usaremos
                    </p>

                    <pre
                        class="bg-gray-900/60 p-4 rounded-lg text-sm overflow-x-auto shadow-inner"><code>npm run test</code></pre>


                    <h1 class="mt-10 mb-6 text-3xl font-bold text-emerald-400">
                        ¿Qué hace <code class="text-indigo-300">mountSuspended</code>?
                    </h1>

                    <p class="mb-4 leading-relaxed">
                        <strong>mountSuspended</strong> es un&nbsp;helper que exporta
                        <code>@nuxt/test-utils/runtime</code>. Monta tus componentes dentro de
                        un entorno <em>Nuxt</em> real y espera automáticamente a que se resuelvan
                        las promesas de <code>&lt;Suspense&gt;</code> o de
                        <code>async&nbsp;setup()</code>.
                    </p>

                    <h2 class="mt-8 mb-4 text-2xl font-semibold text-emerald-300">
                        ¿Qué hace por ti?
                    </h2>
                    <ul class="list-disc ml-5 space-y-2">
                        <li>
                            <span class="font-medium text-indigo-300">Contexto Nuxt:</span>
                            plugins, auto-imports, rutas y
                            <code>useRuntimeConfig()</code>&nbsp;funcionan sin mocks manuales.
                        </li>
                        <li>
                            <span class="font-medium text-indigo-300">Sincroniza Suspense:</span>
                            espera a <code>async setup()</code> y componentes diferidos antes de
                            devolver el wrapper.
                        </li>
                        <li>
                            Internamente usa Vue Test Utils&nbsp;<code>mount()</code>, así que
                            sigues obteniendo un <code>wrapper</code> con todas sus API.
                        </li>
                    </ul>

                    <h2 class="mt-8 mb-4 text-2xl font-semibold text-emerald-300">
                        No es un sistema de mocks
                    </h2>
                    <p class="mb-4 leading-relaxed">
                        Para espiar funciones o sustituir módulos usa las utilidades de Vitest
                        (<code>vi.fn()</code>, <code>vi.mock()</code>) o
                        <code>mockNuxtImport()</code>. <code>mountSuspended</code> solo se
                        ocupa del <em>bootstrap</em> y sincronización.
                    </p>

                    <h2 class="mt-8 mb-4 text-2xl font-semibold text-emerald-300">
                        Ejemplo rápido
                    </h2>
                    <pre class="bg-gray-900/60 p-4 rounded-lg text-sm overflow-x-auto shadow-inner"><code>import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import MyPage from '~/pages/index.vue'

describe('Index page', () =&gt; {
  it('renderiza correctamente', async () =&gt; {
    const wrapper = await mountSuspended(MyPage)
    expect(wrapper.text()).toContain('Hola Nuxt!')
  })
})</code></pre>

                    <footer class="mt-10 text-sm text-gray-400">
                        Documentación →
                        <a href="https://nuxt.com/docs/api/test-utils" target="_blank" rel="noopener"
                            class="underline hover:text-emerald-400 transition-colors duration-200">nuxt.com/docs
                            › Test Utils</a>
                    </footer>

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