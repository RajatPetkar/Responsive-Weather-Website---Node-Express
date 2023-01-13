const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public')

//static serving website
app.use(express.static(publicPath));
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, '../templates/views'));
hbs.registerPartials(path.join(__dirname, '../templates/partials/'));
//routing
app.get('/',(req,res)=>{
    res.render('index',)
});
app.get('/about',(req,res)=>{
    res.render('about');
});
app.get('/weather',(req,res)=>{
    res.render('weather');
});
app.get('*',(req,res)=>{
    res.render('404',{
        errorMsg: '404 Page Not  Found',
    });
});

// listening
app.listen(port,(err)=>{

});