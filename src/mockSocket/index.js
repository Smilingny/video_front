import {WebSocket, Server} from 'mock-socket';

const mockServer = new Server('ws://localhost:8080'); // 模拟 WebSocket 服务器，假设在本地8080端口运行

const mockWebSocket = new WebSocket('ws://localhost:8080'); // 模拟 WebSocket 客户端连接

mockServer.on('connection', socket => {
    socket.on('message', data => {
        mockWebSocket.dispatchEvent(new MessageEvent('message', {data}));
    });
});

export default mockWebSocket;
