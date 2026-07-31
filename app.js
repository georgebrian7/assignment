const express = require('express')

const app = express();


app.set('view engine', 'ejs');
app.listen(3000);

app.get('/', (req,res)=>{
    res.sendFile('./home.html', { root:__dirname});
    // res.send('<p>lastpole</p>');
});
app.get('/about', (req,res)=>{
    res.send('<p>pole</p>');
})

app.use((req,res)=>{
    res.status(404).sendFile('./404.html', { root:__dirname});
    // res.send('<p>lastpole</p>');
});