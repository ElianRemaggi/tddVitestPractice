// tests/ButtonDefault.nuxt.spec.ts
import { describe, it, expect, beforeAll } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import ButtonDefault from '../app/components/ui/ButtonDefault.vue'

let wrapper: ReturnType<typeof mountSuspended>

beforeAll(async () => {
    wrapper = await mountSuspended(ButtonDefault, {
        props: {
            url: 'https://ejemplo.com',
            title: 'Empezar'
        }
    })
})

describe('ButtonDefault.vue', () => {
    it('se monta sin errores', () => {
        expect(wrapper.exists()).toBe(true)
    })

    it('muestra el título', () => {
        expect(wrapper.text()).toContain('Empezar')
    })

    it('enlace correcto', () => {
        expect(wrapper.get('a').attributes('href')).toBe('https://ejemplo.com')
    })
})
