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

//定义post请求的接口 向数据表插入数据
app.post('/post',function(req,res){
    var username=req.body.username;
    var password=req.body.password;
    console.log(username);
    console.log(password);
    var data=[{"username":username,"password":password}];
    //拿到数据后追加到数据库中
    var insertData= function(db,callback){
        //连接到数据文档
        var collection=db.collection('persons');
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
//定义get请求的接口 获取数据
app.post('/api/login',function(req,res){
    console.log("11111111"+req.body.msg);
    var username=req.body.msg || 'dd';
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

//定义modify请求的接口，比如用户要修改密码
app.post('/modify',function(req,res){
    var password = req.body.password;
    var username = req.body.username;
    //首先得从库里找到数据
    var updateData = function(db,callback){
        //连接到数据文档
        console.log(123)
        var collection = db.collection('persons');
        //查询数据
        var whereStr = {"username":username};  //我们要修改的目标信息是所有包含这个内容的数据。
        var updataStr = {$set: {"password":password}}; //要修改的信息，使用不同的更新器结果不一样。

        collection.update(whereStr,updataStr, function(err, result){
            if(err){
                console.log('Error:'+err);
                return;
            }
            console.log('update ok');
            callback(result);
        });
    }

    MongoClient.connect(DB_CONN_STR,function(err,db){
        console.log("连接成功");
        updateData(db,function(result){
            console.log('对应的信息'+result+'已经进行了修改');
            //到这里数据库中对应的信息已经进行了修改，
            db.close();
        });
    });
});
//定义post请求的接口，比如要删除某个用户的信息
app.post('/del',function(req,res){
    var username = req.body.username;
    //首先得从库里找到数据
    var delData = function(db,callback){
        //连接到数据文档
        var collection = db.collection('persons');
        //查询数据
        var whereStr = {"username" : username};  //我们要删除的目标信息是所有包含这个内容的数据。

        collection.remove(whereStr, function(err, result){
            if(err){
                console.log('Error:'+err);
                return;
            }
            callback(result);
        });
    }

    MongoClient.connect(DB_CONN_STR,function(err,db){
        console.log("连接成功--删除成功");
        delData(db,function(result){
//			console.log(result);
            //到这里数据库中对应的信息已经进行了修改，
            db.close();
        });
    });
})

//配置服务器端口
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('服务启动 listening at http://%s:%s', host, port);
})