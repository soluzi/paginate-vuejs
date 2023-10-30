import { createApp } from 'vue'
import App from './App.vue'
import PaginateVuejsPlugin from "./PaginateVuejsPlugin";

createApp(App).use(PaginateVuejsPlugin).mount('#app')
