import {defineStore} from "pinia";

export const useStore = defineStore('main', {
    state: () => ({
        chats: [
            {
                type: 'receive',
                content: '你好啊',
                time: '2021-10-10 10:10:10'
            },
            {
                type: 'receive',
                content: '你好啊',
                time: '2021-10-10 10:10:10'
            },
            {
                type: 'receive',
                content: '你好啊',
                time: '2021-10-10 10:10:10'
            },
            {
                type: 'send',
                content: '你好啊',
                time: '2021-10-10 10:10:10'
            },
            {
                type: 'receive',
                content: '你好啊',
                time: '2021-10-10 10:10:10'
            },
            {
                type: 'send',
                content: '你好啊',
                time: '2021-10-10 10:10:10'
            },
            {
                type: 'receive',
                content: '你好啊',
                time: '2021-10-10 10:10:10'
            },
            {
                type: 'receive',
                content: '你好啊',
                time: '2021-10-10 10:10:10'
            },
            {
                type: 'receive',
                content: '你好啊',
                time: '2021-10-10 10:10:10'
            },
            {
                type: 'send',
                content: '你好啊',
                time: '2021-10-10 10:10:10'
            },
            {
                type: 'receive',
                content: '你好啊',
                time: '2021-10-10 10:10:10'
            },
            {
                type: 'send',
                content: '你好啊',
                time: '2021-10-10 10:10:10'
            }
        ]
    }),
    getters: {
        doubleCount: (state) => state.count * 2
    },
    actions: {
        increment(additon) {
            this.count += additon
        }
    }
})
