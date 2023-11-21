import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import {Button, Form, Field, CellGroup, Toast, Swipe, SwipeItem, Icon, Popup  } from "vant";

import 'vant/lib/index.css';
import 'normalize.css/normalize.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@fortawesome/fontawesome-free/css/all.css'

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
app.use(router).use(ElementPlus)

app.mount('#app')
