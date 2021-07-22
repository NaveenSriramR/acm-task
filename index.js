const express = require('express');
const app = express();

app.set('view engine','ejs')
app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.get('/', (req,res)=>{
    res.render('home.ejs')
})

app.post('/register',(req,res)=>{
    res.render('data.ejs',{data:req.body})
})
app.listen(3000, (err)=>{
    if (err) console.log(err);
    console.log("Server listening on PORT 3000");
})