const express = require('express');
const morgan = require('morgan');
const mongoose =require('mongoose');

const app = express();

const dbURI ="mongodb+srv://trey:<PRq1MZexZNV33RNd>@cluster0.abzjfqb.mongodb.net/?appName=Cluster0"
mongoose.connect(dbURI)
    .then((result)=> console.log('connected to db'))
    .catch((err) => console.log(err));
app.set('view engine', 'ejs');
app.listen(3000);


app.use(express.static('public'));
app.use(morgan('dev'));




app.get('/', (req,res)=>{
    const blogs =[
        { title: 'AVATAR'},
        { title: 'Iron Man'},
        { title: 'Kit'}
    ]
    res.render('home',{blogs})
    
    // res.sendFile('./home.html', { root:__dirname});

    // res.send('<p>lastpole</p>');
});
app.get('/about', (req,res)=>{
    res.render('about', { title: 'tell me about'});
})
app.get('/about/create', (req,res)=>{
    res.render('create');
})

app.use((req,res)=>{
    res.status(404).render('404', { root:__dirname});
   
});