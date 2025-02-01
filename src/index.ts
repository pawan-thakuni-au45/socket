import { WebSocketServer } from "ws";
const wss=new WebSocketServer({port:8000})

const User{
    socket,
    room
}

let allSocket:User[]=[]

wss.on("connection",(socket)=>{

    wss.on("message",(message)=>{
        const parseMessage=JSON.parse(message)
        if(parseMessage.type=="join"){
           allSocket.push({
            socket,
            room:parseMessage.payload.roomId
           })
        }

    } )

})