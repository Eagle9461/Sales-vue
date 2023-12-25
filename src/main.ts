import './assets/main.css'

import { createApp } from 'vue'
import Vue3EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';
import  './assets/tailwind.css';

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.component('EasyDataTable', Vue3EasyDataTable);

app.use(router)

app.mount('#app')
