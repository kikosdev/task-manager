import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/index.less'
import store from './store';
import router from './router';
import axios from 'axios';

const app = createApp(App)
app.config.globalProperties.$axios = axios;

app
.use(router)
.use(store)
.mount('#app')
