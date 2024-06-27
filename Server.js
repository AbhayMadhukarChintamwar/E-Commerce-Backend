import express from 'express';

const server = express();

server.use((req, res)=>{
    res.status(200).json("Welcome to the Eccommerce Web Application");
})

server.listen(2000, ()=>{
    console.log("Server Listing on Port 2000");
})
