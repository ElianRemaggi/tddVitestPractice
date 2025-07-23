import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime' // Utilizado para montar componentes
import FizzBuzz from '../app/pages/FizzBuzz.vue' //importamos nuestro componente 

const wrapper = await mountSuspended(FizzBuzz) //Creamos un  mock

describe('FizzBuzz.vue', () => {
    it('FizzBuzz should exist', async () => {
        expect(wrapper.exists()).toBe(true);
    })

    it('FizzBuzz.execute should be a function', async () => {
        expect(wrapper.vm.execute).toBeInstanceOf(Function);
    })

    it('Execture should return a string ', async () =>{
        expect(wrapper.vm.execute()).toBeTypeOf(typeof 'string')
    })

})
