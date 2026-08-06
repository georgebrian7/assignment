const express = require('express');
const morgan = require('morgan');
const mongoose =require('mongoose');

const app = express();
const blogRoutes =require('./routes/blogRoutes');

mongoose.connect(dbURI)
    .then((result)=> app.listen(3000))
    .then((result)=> console.log('connected to db'))
    .catch((err) => console.log(err))
app.set('view engine', 'ejs');



app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));


app.get('/', (req,res)=>{
    res.redirect('/blogs');

});
app.get('/about', (req,res)=>{
    res.render('about', { title: 'tell me about'});
})

app.use('/blogs',blogRoutes);
app.use((req,res)=>{
    res.status(404).render('404', { root:__dirname});
   
});