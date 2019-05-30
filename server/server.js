const express=require('express');
const bodyParser =require('body-parser');
const cookieParser=require('cookie-parser');
const mongoose=require('mongoose');
const brandRoutes = require("./Routes/brandRoutes");
const woodRoutes = require("./Routes/woodRoutes");
const userdRoutes = require("./Routes/userRoutes");
const productRoutes = require("./Routes/productsRoutes");

require('dotenv').config();

const app=express();

mongoose.Promise=global.Promise
mongoose.connect(process.env.DATABASE)

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(brandRoutes);
app.use(woodRoutes);
app.use(userdRoutes);
app.use(productRoutes);

const port=process.env.PORT|| 3002;

app.listen(port,()=>{
    console.log(`server running at ${port}`);
})
