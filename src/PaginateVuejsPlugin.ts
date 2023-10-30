import type { App } from "vue";
import { Pagination } from './components'

export default {
    install: (app: App) => {
        app.component('Pagination', Pagination)
    }
}

export { Pagination }
