import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [vue()],
    server: {
        host: '0.0.0.0'
    },
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    // devServer: {
    //   proxy: {
    //     '/test': {
    //       target: 'https://baidu.com',
    //       ws: true,
    //       changeOrigin: true,
    //       pathRewrite: {
    //         '^/test': '' //遇到接口路径有test的，就换成http://www.baidu.com/这个请求头，同时把test去掉
    //       }
    //     }
    //   }
    // }
});

