import './assets/main.css'

import {createApp} from 'vue'
import {createPinia} from 'pinia'
import App from './App.vue'
import router from './router'
import {
    Button, Form, Field, CellGroup, Toast,
    Swipe, SwipeItem, Icon, Popup, Tab, Tabs,
    Image as VanImage, Collapse, CollapseItem,
    Divider, Highlight, List, Barrage, PullRefresh, Uploader, Dialog, Switch, NavBar, Search, Tabbar, TabbarItem,
    Grid, GridItem, Cell, Rate, RadioGroup, Radio
} from "vant";

import 'vant/lib/index.css';
import 'normalize.css/normalize.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@fortawesome/fontawesome-free/css/all.css'
import {
    getCurDate,
    getLocalStorage,
    getSessionStorage, removeLocalStorage,
    removeSessionStorage,
    setLocalStorage,
    setSessionStorage
} from "@/common";

const app = createApp(App)
const pinia = createPinia()

app.provide("$getCurDate", getCurDate)
app.provide("$setSessionStorage", setSessionStorage)
app.provide("$getSessionStorage", getSessionStorage)
app.provide("$removeSessionStorage", removeSessionStorage)
app.provide("$setLocalStorage", setLocalStorage)
app.provide("$getLocalStorage", getLocalStorage)
app.provide("$removeLocalStorage", removeLocalStorage)
app.use(router)
app.use(pinia)

app.use(Button).use(Form).use(Field).use(CellGroup).use(Toast).use(Swipe).use(SwipeItem).use(Icon).use(Popup)
    .use(Tab).use(Tabs).use(VanImage).use(Collapse).use(CollapseItem).use(Divider).use(Highlight).use(List)
    .use(Barrage).use(PullRefresh).use(Barrage).use(Uploader).use(Dialog).use(Switch).use(NavBar).use(Search)
    .use(Tabbar).use(TabbarItem).use(Grid).use(GridItem).use(Cell).use(Rate).use(RadioGroup).use(Radio);

app.use(ElementPlus)

app.mount('#app')
