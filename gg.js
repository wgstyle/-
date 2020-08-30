//对象引用
var http=require('http'); 
var urlLib=require('url');
var mysql=require('mysql');
var express=require('express');
var bodyParser=require('body-parser');
var MongoClient = require('mongoose');
//实例化express模块
var app=express();
//打开方式
app.use(bodyParser.urlencoded({extend:true}));
var router = express.Router();
//其他变量
var sql;
var sqlParam;
//定义一个mongodb连接
MongoClient.connect('mongodb://localhost:27017/TCS',{ useNewUrlParser: true },function (err,db) {
    console.log('mongodb连接成功')
});




//定义数据库的集合模型schema模型骨架
var Schema = MongoClient.Schema;
/*___________________________________________________ */
//定义模型内容
var userSchema = new Schema({
        
        uid:{type:String},
        uname:{type:String},
        tname:{type:String},
        telnum:{type:String},
        wechatnum:{type:String},
        idnum:{type:String},
        
    });

//schema发布这个集合模型
var User = MongoClient.model("User",userSchema); 
//处理请求
//处理insert请求
app.get('/insert',function(req,res){
    console.log('请求成功')
    //允许进行跨域访问js->http
    res.setHeader("Access-Control-Allow-Origin", "*"); 
    //请求的数据实例化发布的模型
    var user_1 = new User({
        //id:req.query.id,
        uid:req.query.uid,
        uname:req.query.uname,
        tname:req.query.tname,
        telnum:req.query.telnum,
        wechatnum:req.query.wechatnum,
        idnum:req.query.idnum,
        
    });
    //储存到数据库
    user_1.save(function(err){
        if(err){
            res.end('Error');
            return next();
        }
        res.end();
    });
})
//处理select请求
app.get('/select',function(req,res){
    console.log('请求成功')
    res.setHeader("Access-Control-Allow-Origin", "*"); 

   //请求的数据实例化发布的模型
    var user_1 = new User({
    //id:req.query.id,
       uid:req.query.uid,
    uname:req.query.uname,
    tname:req.query.tname,
    telnum:req.query.telnum,
    wechatnum:req.query.wechatnum,
    idnum:req.query.idnum,
    
    });
    //数据库查询
    User.find(function(err,results){
        if(err){
            res.end('Error');
            return next();
        }
        //以json形式返回到请求页面
        res.json(results);
    });

});
//处理update请求
app.get('/updata',function(req,res){
    console.log('修改');
    let whereStr = {"Uid":"211"};
    let updateStr = {$set:{"Uname":"1234"}};
    User.updateOne(whereStr,updateStr,function (err,res) {
                if (err) {
                    console.log('加入失败：' + err);
                    return
                } else {
                    console.log("修改成功")
                }       
            });
            res.end();
});
//处理删除
app.get('/delete',function (req,res){
    console.log('删除');
    User.deleteMany({"uid": "rfff"},function(err,res){
      if(err){
            res.end('Error');
            return next();
        }  
    }
);


});

var Schema1 = MongoClient.Schema;

var cabinetSchema = new Schema1({
    cid:{type:String},
    size:{type:String},
    state:{type:String},
    ctime:{type:String},
   
    });

//schema发布这个集合模型
var Cabinet = MongoClient.model("Cabinet",cabinetSchema);

//处理请求
//处理insert请求
app.get('/Cinsert',function(req,res){
    console.log('请求成功')
    res.setHeader("Access-Control-Allow-Origin", "*"); 

    //请求的数据实例化发布的模型
    var cabinet_1 = new Cabinet({
    // id:req.query.id,
   
    cid:req.query.cid,
    size:req.query.size,
    state:req.query.state,
    ctime:req.query.ctime,
    
   // time:req.query.time
    });

    //储存到数据库
    cabinet_1.save(function(err){
        if(err){
            res.end('Error');
            return next();
        }
        res.end();
    });
})

//处理select请求
app.get('/Cselect',function(req,res){
    console.log('请求成功')
    res.setHeader("Access-Control-Allow-Origin", "*"); 

   //请求的数据实例化发布的模型
    var cabinet_1 = new Cabinet({
    // id:req.query.id,
    cid:req.query.cid,
    size:req.query.size,
    state:req.query.state,
    ctime:req.query.ctime,
   // time:req.query.time
    });
     //数据库查询
     Cabinet.find({"cid":"333"},function(err,results){
        if(err){
            res.end('Error');
            return next();
        }
        //以json形式返回到请求页面
        res.json(results);
    }    );

});

//处理update请求
app.get('/Cupdata',function(req,res){
    console.log('修改');
    let whereStr = {"cid": "211"};
    let updateStr = {$set:{"state":"1234"}};
    Cabinet.updateOne(whereStr,updateStr,function (err,res) {
                if (err) {
                    console.log('加入失败：' + err);
                    return
                } else {
                    console.log("修改成功")
                }       
            });
            res.end();
});
app.get('/Cdelete',function (req,res){
    console.log('删除');
    Cabinet.deleteMany({"cid":"333"},function(err,res){
      if(err){
            res.end('Error');
            return next();
        }  
    }
);
});


var Schema2 = MongoClient.Schema;
var TimeSchema = new Schema2({
    id:{type:String},
    tid:{type:String},
    descration:{type:String},
    intime:{type:String},
    outtime:{type:String},
    //time:{type:Date}

});
var Time = MongoClient.model("Time",TimeSchema);
app.get('/Tinsert',function(req,res){
    console.log('请求成功')
    res.setHeader("Access-Control-Allow-Origin", "*"); 
    var time_1 = new Time({
    //id:req.query.id,
    id:req.query.id,
    tid:req.query.tid,
    descration:req.query.descration,
    intime:req.query.intime,
    outtime:req.query.outtime,
    
    //time:req.query.time
    }); 
    time_1.save(function(err){
        if(err){
            res.end('Error');
            return next();
        }
    });
    res.end();
waa

});
app.get('/Tselect',function(req,res){
    console.log('请求成功')
    res.setHeader("Access-Control-Allow-Origin", "*"); 
    var time_1 = new Time({
    //id:req.query.id,
    id:req.query.id,
    tid:req.query.tid,
    descration:req.query.descration,
    intime:req.query.intime,
    outtime:req.query.outtime,
    //time:req.query.time
    }); 
    Time.find({"tid":"111"},function(err,results){
        if(err){
            res.end('Error');
            return next();
        }
        //以json形式返回到请求页面
        res.json(results);
    });
});
//处理update请求
app.get('/Tupdata',function(req,res){
    console.log('修改');
    let whereStr = {"tid": "123"};
    let updateStr = {$set:{"descration":"222234"}};
    Time.updateOne(whereStr,updateStr,function (err,res) {
                if (err) {
                    console.log('加入失败：' + err);
                    return
                } else {
                    console.log("修改成功")
                }       
            });
            res.end();
});
app.get('/Tdelete',function (req,res){
    console.log('删除');
    Time.deleteMany({"tid": "123"},function(err,res){
      if(err){
            res.end('Error');
            return next();
        }  
    }
);


});

var Schmea3 = MongoClient.Schema;
var CostSchmea = new Schmea3({
    //id: {type: Number},
    id: {type: String},
   free:{type: String},
income:{type: String},
price:{type: String},
    
});
var Cost = MongoClient.model("Cost", CostSchmea);
app.get('/Cinsert',function(req,res) {
    console.log("请求成功");
    res.setHeader("Access-Control-Allow-Origin", "*"); 
    var cost_1 = new Cost({
        id: req.query.id,
        free: req.query.free,
        income: req.query.income,
        price: req.query.price,
        //time: req.query.time
    });
    cost_1.save(function(err){
        if(err){
            res.end('Error');
            return next();
        }
        res.end();
    })
});
app.get('/Cselect',function(req,res){
        console.log("请求成功");
        res.setHeader("Access-Control-Allow-Origin", "*"); 
        var cost_1 = new Cost({
                id: req.query.id,
                free: req.query.free,
                income: req.query.income,
                price: req.query.price,
        });
        Cost.find({"id":"111"},function(err,results){
            if(err){
                res.end('Error');
                return next();
            }
            res.json(results);
        });
    });
    app.get('/Cupdate',function (req,res) {
                console.log("修改");
                let whereStr = {"id":"111"};
                let updateStr = {$set:{"price":"10"}};
                Cost.updateOne(whereStr,updateStr,function (err,res) {
                    if (err) {
                        console.log('修改失败：' + err);
                        return
                    } else {
                        // add
                        console.log("修改成功")
                    }
                    
                });
                res.end();
    });
    app.get('/Cdelete',function (req,res){
                    console.log('删除');
                    Cost.deleteMany({"id":'111'},function(err,res){
                      if(err){
                            res.end('Error');
                            return next();
                        }  
                    }
                );
                
                
    });
    //异常和监听端口
var db = MongoClient.connection;
db.on('open',function () {
    console.log('MongoDB链接成功')
})
db.on('error',function () {
    console.log('MongoDB连接失败');
})



app.listen(12345);
//表示在控制台上提示用户的输入信息
console.log("server is running in port 12345")
    
