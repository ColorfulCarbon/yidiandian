/*一点点扫码点餐项目API子系统*/
const PORT=9600;
const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');

const adminRouter=require('./routes/admin/admin');
const categoryRouter=require('./routes/admin/category');
const dishRouter=require('./routes/admin/dish');
const settingsRouter=require('./routes/admin/settings');
const NumberRouter=require('./routes/admin/number');

//启动主服务器
var app=express()
app.listen(PORT,()=>{
     console.log('Server Listening'+''+PORT+'...')
     console.log(new Date().toLocaleString())
})

//使用中间件
app.use(cors());
//app.use(bodyParser.urlencoded({}))
app.use(bodyParser.json());//把json格式的数据请求主体数据解析出来放入req.body属性

//挂载路由器
app.use('/admin/category',categoryRouter);
app.use('/admin',adminRouter);
app.use('/admin/dish',dishRouter);
app.use('/admin/settings',settingsRouter)
app.use('/admin/number',NumberRouter)