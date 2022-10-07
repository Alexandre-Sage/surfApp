import http from "http";

const server=http.createServer((req,res)=>{
    console.log("Server working")
});
server.listen(process.env.PORT || 3000)