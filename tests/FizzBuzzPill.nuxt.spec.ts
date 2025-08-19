import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import FizzBuzzPill from '../app/components/ui/FizzBuzzPill.vue';

describe('FizzBuzzPill.vue', () => {

    it('Should render FizzBuzzPill component', () => {
        const wrapper = mount(FizzBuzzPill);
        expect(wrapper.exists()).toBe(true);
    });

    it('debería renderizar el texto pasado por props', () => {
        const text = 'Hello, World!';

        const wrapper = mount(FizzBuzzPill, {
            props: {
                text: text,
            }
        });

        expect(wrapper.text()).toBe(text);
    });

    it('debería tener las props definidas correctamente', () => {
        const wrapper = mount(FizzBuzzPill);

        const { props } = wrapper.vm.$options;

        expect(props.text).toBeDefined();
        expect(props.text.type).toBe(String);

    });

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

    it('getColorById tiene que ser una funcion ', () => {
        const wrapper = mount(FizzBuzzPill);
        expect(wrapper.vm).toHaveProperty('getColorByText');
        expect(wrapper.vm.getColorByText).toBeInstanceOf(Function);
    })

    it('getColorById should return a string', () => {
        const wrapper = mount(FizzBuzzPill);
        const executionResult = wrapper.vm.getColorByText("Fizz");
        expect(typeof executionResult).toBe('string')
    })

    it('getColorById should return green at Fizz', () => {
        const wrapper = mount(FizzBuzzPill);
        const executionResult = wrapper.vm.getColorByText("Fizz");
        expect(executionResult).toBe('bg-emerald-500')
    })

    it('getColorById should return green at Buzz', () => {
        const wrapper = mount(FizzBuzzPill);
        const executionResult = wrapper.vm.getColorByText("Buzz");
        expect(executionResult).toBe('bg-cyan-500')
    })

    it('getColorById should return green at FizzBuzz', () => {
        const wrapper = mount(FizzBuzzPill);
        const executionResult = wrapper.vm.getColorByText("FizzBuzz");
        expect(executionResult).toBe('bg-purple-500')
    })

    it('getColorById should return grey at number', () => {
        const wrapper = mount(FizzBuzzPill);
        const executionResult = wrapper.vm.getColorByText("1");
        expect(executionResult).toBe('bg-gray-500')
    })
});
