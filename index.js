const express=require("express");
const {PORT}=require("./src/config/serverConfig.js")

const settingUpServer=async()=>{
    const app=express();
    app.listen(PORT,()=>{
        console.log(`Server is listening on the port ${PORT}` );
       
    })
}
settingUpServer();