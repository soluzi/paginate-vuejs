import type { App } from "vue";
import { Pagination } from './components'
import './components/css/style.css';

export default {
    install: (app: App) => {
        app.component('Pagination', Pagination)
    }
}

export { Pagination }
