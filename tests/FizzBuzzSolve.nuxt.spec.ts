import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import FizzBuzzSolve from '../app/pages/FizzBuzzSolve.vue'


describe('FizzBuzzSolve.vue', () => {
    it('FizzBuzz should exist', async () => {
        const wrapper = await mountSuspended(FizzBuzzSolve)
        expect(wrapper.exists()).toBe(true);
    })

    it('FizzBuzz.execute should be a function', async () => {
        const wrapper = await mountSuspended(FizzBuzzSolve)
        expect(wrapper.vm).toHaveProperty('execute');
        expect(wrapper.vm.execute).toBeInstanceOf(Function);
    })

    it('FizzBuzz.execute should return string', async () => {
        const wrapper = await mountSuspended(FizzBuzzSolve);
        const executionResult = wrapper.vm.execute();
        expect(executionResult).toBeInstanceOf('string');
    })
})