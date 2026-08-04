const express = require('express');
const morgan = require('morgan');
const mongoose =require('mongoose');
const Blog =require('./models/blog')
const app = express();

const dbURI ="mongodb+srv://trey:PRq1MZexZNV33RNd@cluster0.abzjfqb.mongodb.net/?appName=Cluster0"
mongoose.connect(dbURI)
    .then((result)=> app.listen(3000))
    .then((result)=> console.log('connected to db'))
    .catch((err) => console.log(err));
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
app.get('/about/create', (req,res)=>{
    res.render('create');
})
app.post('/blogs',(req,res)=>{
const blog =new Blog(req.body)
    blog.save()
        .then((result)=>{
            res.redirect('/blogs');
        })
        .catch((err)=>{
            console.log(err);
        });
});
app.get('/blogs', (req,res)=>{
    Blog.find()
        .then((result)=>{
            res.render('home',{blogs:result})
        })
        .catch((err)=>{
            console.log(err);
        });
});

app.get('/blogs/:id', (req,res)=>{
    const id =req.params.id;
    Blog.findById(id)
        .then((result)=>{
            res.render('details',{blog:result})
        })
        .catch((err)=>{
            console.log(err);
        });
});

app.delete('/blogs/:id',(req,res) =>{
    const id =req.params.id;
    Blog.findByIdAndDelete(id)
        .then((result)=>{
            res.json({redirect:'/blogs'});
        })
        .catch((err)=>{
            console.log(err);
        });

})



app.use((req,res)=>{
    res.status(404).render('404', { root:__dirname});
   
});