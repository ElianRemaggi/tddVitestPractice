<script setup lang="ts">
/* No se necesita lógica por ahora */
</script>

<template>
  <div class="min-h-screen mt-20 text-white">
    <!-- Fondo animado -->
    <DotBackground class="absolute top-0 left-0 w-full h-full" />

    <!-- Contenido -->
    <main class="flex items-center justify-center min-h-screen px-6 relative z-10">
      <article
        class="w-full max-w-3xl rounded-xl bg-gray-800/70 backdrop-blur-sm p-8 shadow-xl ring-1 ring-gray-700"
      >


        <h1 class="mb-6 text-3xl font-bold text-emerald-400">
          Kata Fizz Buzz
        </h1>

        <p class="mb-4 leading-relaxed">
          <strong>Fizz Buzz</strong> es una kata muy conocida que se usa para
          practicar <em>TDD</em> y refactorizaciones pequeñas. El objetivo es
          escribir una función que recorra los números del&nbsp;<code>1</code>
          al&nbsp;<code>100</code> (o cualquier rango) y devuelva:
        </p>

        <ul class="list-disc ml-5 space-y-2">
          <li>
            <span class="text-indigo-300 font-medium">“Fizz”</span> si el número
            es múltiplo de&nbsp;3.
          </li>
          <li>
            <span class="text-indigo-300 font-medium">“Buzz”</span> si es
            múltiplo de&nbsp;5.
          </li>
          <li>
            <span class="text-indigo-300 font-medium">“FizzBuzz”</span> si es
            múltiplo de&nbsp;3&nbsp;y&nbsp;5.
          </li>
          <li>El número tal cual en cualquier otro caso.</li>
        </ul>

        <h2 class="mt-8 mb-4 text-2xl font-semibold text-emerald-300">
          Pasos sugeridos (TDD)
        </h2>
        <ol class="list-decimal ml-5 space-y-2">
          <li>Escribe un test que verifique que <code>1 ⇒ 1</code>.</li>
          <li>Haz lo mínimo para pasar el test.</li>
          <li>Agrega el caso <code>3 ⇒ "Fizz"</code> y pásalo.</li>
          <li>Sigue con <code>5 ⇒ "Buzz"</code>.</li>
          <li>
            Añade el caso combinado <code>15 ⇒ "FizzBuzz"</code> y generaliza la
            solución.
          </li>
          <li>Refactoriza manteniendo todos los tests en verde.</li>
        </ol>


        <footer class="mt-10 text-sm text-gray-400">
          Practica la kata usando el ciclo
          <em>Red → Green → Refactor</em> y cronometra tu progreso. ¡Diviértete!
        </footer>
      </article>
    </main>
  </div>
</template>

<style scoped></style>
