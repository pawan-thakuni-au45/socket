"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8000 });
//connection= it make connection ,whenever a connection made give me the socket of that pwrson,a place through which i can send msg and get msg
wss.on("connection", (socket) => {
    socket.on("message", (e) => {
        if (e.toString() === "ping") {
            socket.send("pong");
        }
    });
});
