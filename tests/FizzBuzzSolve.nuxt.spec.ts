import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime' 
import FizzBuzzSolve from '../app/pages/FizzBuzzSolve.vue'

const wrapper = await mountSuspended(FizzBuzzSolve) 

describe('FizzBuzzSolve.vue', () => {
    it('FizzBuzz should exist', async () => {
        expect(wrapper.exists()).toBe(true);
    })

    it('FizzBuzz.execute should be a function', async () => {
        expect(wrapper.vm.execute).toBeInstanceOf(Function);
    })

})
