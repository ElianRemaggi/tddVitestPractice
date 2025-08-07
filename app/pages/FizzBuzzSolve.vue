<script setup lang="ts">

//Funcion que se llama execute ,
const execute = (number: number): string => {

  if (number % 3 === 0 && number % 5 === 0) {
    return "FizzBuzz"
  }
  if (number % 3 === 0) {
    return "Fizz"
  }
  if (number % 5 === 0) {
    return "Buzz"
  }

  return number.toString()
}

const pills = computed(() =>
  Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,          // 1 … 100
    text: execute(i + 1) // Fizz/Buzz/FizzBuzz/ número
  }))
)
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

        <p>
          Lo primero que tendriamos que hacer es buscar el test rojo.
          Un test minimo para comenzar a codificar la solucion. Un buen primer test seria que el componente se renderize
          correctamente esto lo logramos con nuestro primer test:
        </p>
        <pre>
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
        <p> Con este codigo podemos comprobar que el componente existe.
          Ya podemos usar " npm run test " para verificar que nuestro test esta en rojo.
          A continuacion tendremos que creear la implementecion minima para pasar el test.
        </p>
        <pre>
          <code>
            &lt;script setup lang="ts"&gt;
            
            &lt;/script&gt;

            &lt;template&gt;
              Componente FizzBuzzSolve
            &lt;/template&gt;
          </code>
        </pre>
        <p>Ahora que comprobamos que el componente tenemos que identificar el siguiente test rojo, vamos a necesitar una
          funcion execute para poder realizar la Kata. Cuando creemos una funcion es necesario exportarla para que
          vitest pueda
          leerla.
        </p>
        <p>Si bien podriamos crear useFizzBuzz como un composable, veremos como testear unafuncion de un comopnente en Nuxt. Agregaremos el siguiente test para comprobar que exectue es una funcion</p>
        <pre>
  <code>
    it('FizzBuzz.execute should be a function', async () => {
    const wrapper = await mountSuspended(FizzBuzzSolve)
    expect(wrapper.vm).toHaveProperty('execute');
    expect(wrapper.vm.execute).toBeInstanceOf(Function);
    //Tambien funcionara
    expect( typeof wrapper.vm.execute).toBe('function');
    })
  </code>
</pre>

        <p>
          El test por si solo fallara hasta que codifiquemos la respuesta minima.</p>
        <pre>
  <code>
    const execute = () => {

    }

    defineExpose({ execute })
  </code>
</pre>
        <p>
          En caso de requerirlo este seria el momento para relizar Refactor.
        </p>

        <p>
          Vamos a comprobar que el tipo de dato que devuelve FizzBuzz sea de tipo string, por lo que en nuestros test
          agregarmeos la verificacion:
        </p>

        <pre>
  <code>
    it('FizzBuzz.execute should return string', async () => {
    const wrapper = await mountSuspended(FizzBuzzSolve);
    const executionResult = wrapper.vm.execute();
    expect(typeof executionResult).toBe('string')
    })
  </code>
</pre>
        <p >
          Crearemos un test para comprobar que los parametros se estan tomando de manera adecuada
        </p>

        <pre>">
          <code>
            it('debería tener las props definidas correctamente', () => {
                const wrapper = mount(FizzBuzzPill, {
                    props: { text: 'Fizz' }
                })

                const optionsProps = wrapper.vm.$options.props!
                expect(optionsProps.text).toBeDefined()
                expect(optionsProps.text.type).toBe(String)

                expect(wrapper.props('text')).toBe('Fizz')

                expect(wrapper.text()).toContain('Fizz')

            });
          </code>
        </pre>
        <p>
          Por ultimo vamos a agregar un test que se ejecutara una vez por cada parametro que le pasemos.
        </p>
        <p>
          Vamos a detallar unas cosas:
        </p>
        <ul class="list-disc ml-5 space-y-2 my-4">
          <li>
            <code>it.each([...])</code>: Test parametrizado (<em>table-driven</em>). Vitest ejecuta el mismo test tantas
            veces
            como filas haya en el array.
          </li>
          <li>
            <code>[3, 'Fizz'], [6, 'Fizz'], …</code>: Cada sub-array es un caso de prueba: primer elemento (input) y
            resultado
            esperado (expected).
          </li>
          <li>
            <code>('execute(%i) ⇒ "%s"', …)</code>: El primer argumento es el título dinámico del test.
            <ul class="list-disc ml-5 mt-2 space-y-1">
              <li><code>%i</code> se sustituye por el número (input).</li>
              <li><code>%s</code> se sustituye por la cadena esperada (expected).</li>
            </ul>
          </li>

        </ul>



        <pre>
        <code>
          it.each([
          [3, 'Fizz'],
          [6, 'Fizz'],
          [5, 'Buzz'],
          [10, 'Buzz'],
          [15, 'FizzBuzz'],
          [30, 'FizzBuzz'],
          [1, '1'],
          [22, '22']
          ])('execute(%i) ⇒ "%s"', async (input, expected) => {
          const wrapper = await mountFizzBuzz()
          expect(wrapper.vm.execute(input)).toBe(expected)
          })
        </code>
      </pre>



        <h4 class="my-6 text-xl font-bold text-emerald-400">
          Extra
        </h4>

        <p>
          Para testear props vamos a crear una pill, para ello crearemos un nuevo archivo de test :
          FizzBuzzPill.nuxt.spec.ts
        </p>

        <pre>
        <code>
          import { mount } from '@vue/test-utils';
          import { describe, it, expect } from 'vitest';
          import FizzBuzzPill from '../app/components/ui/fizzBuzzPill.vue';

      describe('FizzBuzzPill.vue', () => {
        it('debería renderizar el texto y aplicar el color pasados por props', () => {
                const text = 'Hello, World!';
                const color = 'red';

                const wrapper = mount(FizzBuzzPill, {
                    props: {
                        text: text,
                        color: color
                    }
                });

                expect(wrapper.text()).toBe(text);
                const divElement = wrapper.find('div');
                expect(divElement.attributes().style).toContain(`color: ${color}`);
            });

            it('debería tener las props definidas correctamente', () => {
                const wrapper = mount(FizzBuzzPill);
                const { props } = wrapper.vm.$options;

                expect(props.text).toBeDefined();
                expect(props.text).toBe(String);

                expect(props.color).toBeDefined();
                expect(props.color).toBe(String);
              });
          });
        </code>
      </pre>


        <h4 class="my-6 text-2xl font-bold text-emerald-400">
          Llamamos a la funcion final de 1 a 100 :
        </h4>


        <div class="flex w-full flex-wrap justify-center gap-4 mt-4">
          <FizzBuzzPill v-for="pill in pills" :key="pill.id" :text="pill.text" />
        </div>


      </article>
    </main>
  </div>

</template>


<!-- al final de tu componente -->
<style scoped>
/* Tipografía y espaciado de los párrafos */
p {
  margin-bottom: 1rem; /* mb-4 */
  line-height: 1.625; /* leading-relaxed */
  color: rgb(229 231 235); /* text-gray-200 *
} 

/* Cuadro de código con fondo, padding y scrollbar horizontal */
pre {
  margin-top: 1.5rem; /* my-6 */
  margin-bottom: 1.5rem; /* my-6 */
  background-color: rgb(17 24 39 / 0.6); /* bg-gray-900/60 */
  padding: 1rem; /* p-4 */
  border-radius: 0.5rem; /* rounded-lg */
  font-size: 0.875rem; /* text-sm */
  box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05); /* shadow-inner */
  overflow-x: auto; /* overflow-x-auto */
}

/* Evita que el <code> se desborde verticalmente */
code {
  white-space: pre-wrap; /* whitespace-pre-wrap */
}

/* Listas con viñetas y separación uniforme */
ul {
  list-style-type: disc; /* list-disc */
  margin-left: 1.25rem; /* ml-5 */
  margin-top: 1rem; /* my-4 */
  margin-bottom: 1rem; /* my-4 */
}

</style>
