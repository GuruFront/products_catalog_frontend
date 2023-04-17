import {defineConfig} from 'cypress'

export default defineConfig({
    projectId: 'qar9mw',
    e2e: {
        baseUrl: 'https://products-catalog-frontend.vercel.app'
    }
});