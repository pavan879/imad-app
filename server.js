var express = require('express');
var morgan = require('morgan');
var path = require('path');


var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index2.html'));
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
/*app.get('/raja',function(req,res)
{
   res.sendFile(path.join(__dirname, 'ui', 'raja.html'));   
}
);app.get('/yash',function(req,res)
{
   res.sendFile(path.join(__dirname, 'ui', 'yash.html'));   
}
);*/
// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
