import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import {
    Button, Form, Field, CellGroup, Toast,
    Swipe, SwipeItem, Icon, Popup, Tab, Tabs,
    Image as VanImage, Collapse, CollapseItem,
    Divider, Highlight, List, Barrage
} from "vant";

import 'vant/lib/index.css';
import 'normalize.css/normalize.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@fortawesome/fontawesome-free/css/all.css'

const app = createApp(App)

app.use(router)

app.use(Button).use(Form).use(Field).use(CellGroup).use(Toast).use(Swipe).use(SwipeItem).use(Icon).use(Popup)
    .use(Tab).use(Tabs).use(VanImage).use(Collapse).use(CollapseItem).use(Divider).use(Highlight).use(List)
    .use(Barrage)

app.use(ElementPlus)

app.mount('#app')
