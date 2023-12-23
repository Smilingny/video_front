import {defineStore} from "pinia";

export const useStore = defineStore('main', {
    state: () => ({
        ads: [],
        chats: [],
        activeTab: 'first'
    }),
    getters: {
        //根据Id获取广告
        getAdById: (state) => (id) => {
            return state.ads.find(ad => ad.id === id)
        }
    },
    actions: {
    }
})
