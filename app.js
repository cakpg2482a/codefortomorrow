const express = require("express")
const empRouter = require("./routers/Emprouter")
const cors = require("cors")
const server = express();

server.set("view engie","ejs")
server.use(express.json())
server.use(cors())
server.use("/user",empRouter)

server.get("/",(request,response)=>{

response.send("http://localhost:8989/user/list  :for get user    http://localhost:8989/user/save   for save user")
})

server.listen(8989,()=>{
console.log("http://localhost:8989")
})

