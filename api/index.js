/**
 * Created by farben on 17/6/27.
 */
//配置mongodb数据库相关的内容
var mongodb=require('mongodb');
var MongoClient=mongodb.MongoClient;
var DB_CONN_STR='mongodb://localhost:27017/chenzhouDB';//创建数据库，没有的话会自动创建

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

//定义接口 获取数据
app.post('/api/login',function(req,res){
    console.log("sssss"+req.body.email);
    var email=req.body.email || 'dd';
    //首先得从库里拿到数据
    var selectData=function(db,callback){
        //连接到数据文档
        var collection=db.collection('personMatt');
        //查询数据
        var whereStr={"email":email};  //我们要查询的信息是所有包含这个内容的数据。
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
//定义post请求的接口 向数据表插入数据
app.post('/api/register',function(req,res){
    // var username=req.body.username;
    // var password=req.body.password;
    // console.log(username);
    console.log(req.body.password);
   // var data=[{"username":username,"password":password}];
    var data=[req.body];
    //拿到数据后追加到数据库中
    var insertData= function(db,callback){
        //连接到数据文档 建立persons并且插入数据
        var collection=db.collection('personMatt');
        console.log(collection + '文档链接');
        collection.insert(data,function(err,result){
            if(err){
                console.log("Error"+err);
                return;
            }
            console.log(result);
        })
    }
    MongoClient.connect(DB_CONN_STR,function(err,db){
        console.log("连接成功--插入成功");
        insertData(db,function(result){
            console.log(result + 'ok');
            db.close();
        })
    })
});
app.get('/api/home', function (req, res) {
    var result = require('../data/home.json');
    res.json(result);


});
//配置服务器端口
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('服务启动 listening at http://%s:%s', host, port);
})