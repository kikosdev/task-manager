import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/index.less'
import store from './store';
import router from './router';
import axios from 'axios';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; // for styles

const notyf = new Notyf({
  duration: 5000, // set duration for notifications
  position: {
    x: 'right',
    y: 'bottom',
  },
  types: [
    {
      type: 'success',
      background: 'green',
      icon: false,
    },
    {
      type: 'error',
      background: 'red',
      icon: false,
    },
  ],
});

const app = createApp(App)
app.config.globalProperties.$axios = axios;
app.config.globalProperties.$notyf  = notyf;

app
.use(router)
.use(store)
.mount('#app')
