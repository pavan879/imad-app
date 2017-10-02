var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool=require('pg').Pool;
var config={
    user:'pavankumarlingamallu11',
    database:'pavankumarlingamallu11',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password: process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index2.html'));
});

var pool=new Pool(config);
app.get('/test-db',function (req,res){
   pool.query('SELECT * FROM test',function(err,result){
       if(err)
       {
           res.status(500).send(err.toString());
       }
       else
       {
           res.send(JSON.stringify(result.rows));
       }
   });
    
});




app.get('/ui/style2.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style2.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/pavan',function(req,res)
{
  res.sendFile(path.join(__dirname, 'ui', 'pavan.html'));  
}
);
app.get('/raja',function(req,res)
{
   res.sendFile(path.join(__dirname, 'ui', 'raja.html'));   
}
);app.get('/yash',function(req,res)
{
   res.sendFile(path.join(__dirname, 'ui', 'yash.html'));   
}
);
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
