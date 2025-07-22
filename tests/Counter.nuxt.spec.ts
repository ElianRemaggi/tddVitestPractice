import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import Counter from '../app/components/counter/Counter.vue'

describe('Counter.vue', () => {
    it('incrementa el contador', async () => {
        const wrapper = await mountSuspended(Counter)
        expect(wrapper.text()).toContain('Clicked 0')
        await wrapper.find('button').trigger('click')
        expect(wrapper.text()).toContain('Clicked 1')
    })
})
