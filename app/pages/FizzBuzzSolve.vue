<script setup lang="ts">

//Funcion que se llama execute ,
const execute  = (number : number) : string => {
  
  if(number % 3 === 0 && number % 5 === 0){
    return "FizzBuzz"
  }
  if(number % 3 === 0){
    return "Fizz"
  }
  if(number % 5 === 0){
    return "Buzz"
  }

  return number.toString()
}

defineExpose({ execute })

</script>

<template>
  <div class="min-h-screen mt-20 text-white">


    <DotBackground class="absolute top-0 left-0 w-full h-full" />
    <main class="flex items-center justify-center min-h-screen px-6 relative z-10">
      <article class="w-full max-w-3xl rounded-xl bg-gray-800/70 backdrop-blur-sm p-8 shadow-xl ring-1 ring-gray-700">
        <h1 class="mb-6 text-3xl font-bold text-emerald-400">
          Kata Fizz Buzz Solution
        </h1>

        <p class="mb-4 leading-relaxed">
          Lo primero que tendriamos que hacer es buscar el test rojo.
          Un test minimo para comenzar a codificar la solucion. Un buen primer test seria que el componente se renderize
          correctamente esto lo logramos con el codigo:
        </p>
        <pre class="bg-gray-900/60 p-4 rounded-lg text-sm overflow-x-auto shadow-inner">
          <code>
          import { describe, it, expect } from 'vitest'
          import { mountSuspended } from '@nuxt/test-utils/runtime'
          import FizzBuzzSolve from '../app/pages/FizzBuzzSolve.vue'

          describe('FizzBuzzSolve.vue', () => {
              it('FizzBuzz should exist', async () => {   
                  const wrapper = await mountSuspended(FizzBuzzSolve)
                  expect(wrapper.exists()).toBe(true);
              })
          })

          </code>
        </pre>
        <p class="mb-4 leading-relaxed"> Con este codigo podemos comprobar que el componente existe. Ahora que comprobamos que el componente tenemos que identificar el siguiente test rojo, vamos a necesitar una funcion execute para poder realizar la Kata. Cuando creemos una funcion es necesario exportarla para que vitest pueda leerla.
        </p>
        <p>Agregaremos el siguiente test para comprobar que exectue es una funcion</p>
        <pre class="bg-gray-900/60 p-4 rounded-lg text-sm overflow-x-auto shadow-inner">
          <code>
            it('FizzBuzz.execute should be a function', async () => {
              const wrapper = await mountSuspended(FizzBuzzSolve)
              expect(wrapper.vm).toHaveProperty('execute');
              expect(wrapper.vm.execute).toBeInstanceOf(Function);
              //Tambien funcionara 
              expect( typeof wrapper.vm.execute).toBe('function');
            })

            })
          </code>
        </pre>

        <p class="mb-4 leading-relaxed">
          El test por si solo fallara hasta que codifiquemos la respuesta minima.</p>
        <pre class=" bg-gray-900/60 p-4 rounded-lg text-sm overflow-x-auto shadow-inner">
          <code>
            const execute = () => {

            }

            defineExpose({ execute })
          </code>
        </pre>
        <p class="mb-4 leading-relaxed">
          En caso de requerirlo este seria el momento para relizar Refactor.
        </p>

        <p class="mb-4 leading-relaxed">
          Vamos a comprobar que el tipo de dato que devuelve FizzBuzz sea de tipo string, por lo que en nuestros test agregarmeos la verificacion: 
        </p>

        <pre class=" bg-gray-900/60 p-4 rounded-lg text-sm overflow-x-auto shadow-inner">
          <code>
            it('FizzBuzz.execute should return string', async () => {
              const wrapper = await mountSuspended(FizzBuzzSolve);
              const executionResult = wrapper.vm.execute();
              expect(typeof executionResult).toBe('string')
            })
          </code>
        </pre>
        

      </article>
    </main>
  </div>

</template>

<style scoped></style>
