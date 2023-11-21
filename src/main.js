import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import {Button, Form, Field, CellGroup, Toast, Swipe, SwipeItem, Icon, Popup  } from "vant";

import 'vant/lib/index.css';

const app = createApp(App)

app.use(router)
    .use(Button)
    .use(Form)
    .use(Field)
    .use(CellGroup)
    .use(Toast)
    .use(Swipe)
    .use(SwipeItem)
    .use(Icon)
    .use(Popup);

app.mount('#app')
