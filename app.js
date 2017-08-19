const express=require('express');
const hbs=require('hbs');
const fs=require('fs');
var app=express();

app.set('view engine','hbs');

hbs.registerPartials(__dirname + '/views/partials');

app.use(express.static(__dirname + '/public'));



app.use((req,res,next)=>{
    res.render('workinprogress.hbs');
    });






app.use((req,res,next)=>{
    var now=new Date().toDateString();
   var log= `${now}, ${req.method}, ${req.url}`;
    console.log(log);
    fs.appendFileSync('server.log', log);
        next();
    });









hbs.registerHelper('getyear',()=>{
    return new Date().getFullYear();

});

hbs.registerHelper('uppercase',(text)=>{
    return text.toUpperCase();
});


app.get('/',(req,res)=>{
    res.render('home.hbs',{
        name:'hamza',
        header:'HBS'
    });
    
});

app.get('/home1',(req,res)=>{
    res.render('home1.hbs',{
        name:'hamza',
        header:'HBS'

    });
    
});


app.listen(3000,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('listning on port 3000');
    }
});