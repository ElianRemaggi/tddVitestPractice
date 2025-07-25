// tests/ButtonDefault.spec.ts
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import ButtonDefault from '../app/components/ui/ButtonRedirect.vue'

const factory = () =>
    mount(ButtonDefault, {
        props: { url: 'https://ejemplo.com', title: 'Empezar' }
    })

const wrapper = factory()

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

    it("ser clickeable", () => {
        const wrapper = factory()
        expect(wrapper.get('a').attributes('href')).toBe('https://ejemplo.com')
        wrapper.get('a').trigger('click')
        expect(window.location.href).toBe('https://ejemplo.com/')
    })
})
