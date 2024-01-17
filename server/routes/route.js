const express = require('express');
const app = express();
const {handleGetlogin,handleGetadmin,handleSignup,handleAdminSignup,handleGetsignupByid,handleGetdeleteByid,handleGetloginByid,handleUpdateloginByid} = require("../controllers/controller");

app.get("/", handleGetlogin);
app.get("/Admin", handleGetadmin);
app.post('/signup', handleSignup);
app.post('/admin/signup', handleAdminSignup);
app.delete('/signup/:id', handleGetsignupByid);
app.put('/deleteLogin/:id', handleGetdeleteByid);
app.get("/getLogin/:id",handleGetloginByid);
app.put("/updateLogin/:id",handleUpdateloginByid);

module.exports = app;