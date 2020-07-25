const express=require("express");
const socketio=require("socket.io");
const path=require("path");
const { env } = require("yargs");
const http=require("http");
const app=express();

const server=http.createServer(app);
const port=3000||process.env.PORT;
const io=socketio(server);
app.use(express.static(path.join(__dirname,'public')));

io.on('connection',socket=>{
    console.log("new socket connection");
    socket.emit('message',"Welcome to dheeraj's chat app")
    socket.broadcast.emit('message','A User has joined');
    socket.on('disconnect',()=>{
        io.emit('message','A User has left');
    })
    socket.on('chat-message',message=>{
       io.emit('message',message);
    })
}

)

server.listen(port,()=>
{
    console.log("the siting is running on port "+port)
});