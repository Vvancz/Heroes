// 封装并导出 使用mysql模块的5个步骤
module.exports=(sql,params,cb)=>{
 const mysql=require('mysql');
 const conn=mysql.createConnection({
     host:'localhost',
     port:3306,
     user:'root',
     password:'',
     database:'hero'
 });
 conn.connect(sql,params,cb);
 conn.query();
 conn.end();
}