import { WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 8000 });

//connection= it make connection ,whenever a connection made give me the socket of that pwrson,a place through which i can send msg and get msg
wss.on("connection",(socket)=>{


    socket.on("message", (e)=>{
        if(e.toString() ==="ping"){
            socket.send("pong")
        }
    })

})