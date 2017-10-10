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

var persons={
'pav':{
  title:"Pavan's page",
  heading:'LVS PAVAN KUMAR',
  dob:'22/07/1995',
  notes:'Working in NTT DATA'
},
'deepu':{
  title:"Pradeep's page",
  heading:'LV PRADEEP KUMAR',
  dob:'07/10/1996',
  notes:'Studying at Vignan'
},
'tom':{
  title:"Tom's page",
  heading:'B ANUSHA',
  dob:'12/03/1995',
  notes:'Working in TCS'
}
};
function createTemplate (data){
var title=data.title;
var heading=data.heading;
var dob=data.dob;
var notes=data.notes;

var htmlTemplate=
        `<html>
        <head>
        <title>
        ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </head>
        <body>
        <h2>${heading}</h2>
        <p>DOB <i style="font-family:sans-serif;color:red">${dob}</i></p>
        <p style="color:blue"><b>${notes}</b></p>
        </body>
        </html>`;
        return htmlTemplate;
}

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
           res.send(JSON.stringify(result));
       }
   });
    
});

app.get('/:perName',function(req,res)
{
  var perName=req.params.perName;
  res.send(createTemplate(persons[perName]));
}
);



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
