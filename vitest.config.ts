// vitest.config.ts
import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
    test: {
        environment: 'happy-dom', 
        globals: true,           
        coverage: {
            reporter: ['text', 'html'],
            all: true
        }
    }
})
