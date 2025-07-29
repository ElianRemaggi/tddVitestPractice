// tests/FizzBuzzSolve.nuxt.spec.ts
import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import FizzBuzzSolve from '../app/pages/FizzBuzzSolve.vue' // ajusta la ruta si es distinta

/**
 * Reglas:
 * - múltiplo de 3  ⇒ "Fizz"
 * - múltiplo de 5  ⇒ "Buzz"
 * - múltiplo de 15 ⇒ "FizzBuzz"
 * - cualquier otro ⇒ número en string
 */

describe('FizzBuzzSolve.vue', () => {
  /** helper que monta una vez por test */
  const mountFizzBuzz = () => mountSuspended(FizzBuzzSolve)

  /* Montaje
    Verifica que el componente se renderiza sin errores.*/
  it('debería montar el componente', async () => {
    const wrapper = await mountFizzBuzz()
    expect(wrapper.exists()).toBe(true)
  })
  /* Método execute
    Confirma que está expuesto en wrapper.vm y es una función.*/
  it('existe el método execute', async () => {
    const wrapper = await mountFizzBuzz()
    expect(typeof wrapper.vm.execute).toBe('function')
  })
  /*
  Tipo de retorno
    Garantiza que siempre devuelve un string.
  */
  it('execute debe devolver un string', async () => {
    const wrapper = await mountFizzBuzz()
    const result = wrapper.vm.execute(1)
    expect(typeof result).toBe('string')
  })

  /*
  Casos de la kata (it.each)
    Múltiplos de 3 ⇒ "Fizz"
    Múltiplos de 5 ⇒ "Buzz"
    Múltiplos de 3 y 5 ⇒ "FizzBuzz"
    Números normales ⇒ el propio número como string
*/
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
})
