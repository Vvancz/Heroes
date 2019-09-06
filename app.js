// 开启Web服务
const express=require('express');
// 创建服务器对象
const app=express();
// 监听端口，开启服务
app.listen(3000,()=>console.log('服务器开启啦！端口：3000'));


////////////////////////////////////////////////////////////
// 中间件来处理所有静态页面
// app.use('请求的url的开头'，中间件函数);
app.use(express.static('manager'));

// 中间件，处理格式为 x-www-form-urlencoded 的POST请求
const bodyParser =require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

////////////////////////////////////////////////////////////
// 各种 接口
