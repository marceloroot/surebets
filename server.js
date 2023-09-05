const express = require('express');
//import express from "express";
const {resolve} =require('path');

const app =express();

app.use('/',
express.static(
    resolve(__dirname,'./dist')
)
)
app.use('*', express.static( resolve( __dirname, './dist' ) ) )
//tirar o port.env e colocar no package.json trocar type="module" para type="commonjs" depoois de buildado
app.listen(3020,(err)=>{
    if(err){return  console.log(err)}

    console.log('Tudo funcionando')
});