/**
 * Created by farben on 17/6/27.
 */
//配置mongodb数据库相关的内容
var mongodb=require('mongodb');
var MongoClient=mongodb.MongoClient;
var DB_CONN_STR='mongodb://localhost:27017/foobar';

//配置node服务器相关内容：
var express=require('express');
var app = express();
var bodyParder = require('body-parser');
app.use(bodyParder.urlencoded({extended: true}));

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
})

//定义get请求的接口 获取数据
app.post('/api/login',function(req,res){
    console.log("1111ddddd1111"+req.body.password+req.body.username+req.body[0]);
    var username=req.body.msg || req.body||'dd';
    //首先得从库里拿到数据
    var selectData=function(db,callback){
        //连接到数据文档
        var collection=db.collection('persons');
        //查询数据
        var whereStr={"username":username};  //我们要查询的信息是所有包含这个内容的数据。
        collection.find(whereStr).toArray(function(err,result){
            if(err){
                console.log('Error:'+err);
                return;
            }
            callback(result);
            console.log(result+'33333333333')
        })
    }

    MongoClient.connect(DB_CONN_STR,function(err,db){
        console.log("连接成功...");
        selectData(db,function(result){
            console.log(result + '6666666666');
            //把数据返回给前端
            res.status(200),
                res.json(result)

            db.close();
        })
    })

});
//配置服务器端口
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('服务启动 listening at http://%s:%s', host, port);
})