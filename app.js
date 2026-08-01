const express = require('express')

const app = express();


app.set('view engine', 'ejs');
app.listen(3000);

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