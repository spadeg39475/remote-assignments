const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');


const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
app.use(express.static("public"));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.get('/getData', (req, res) => {
    
    var r = /^[0-9]*[1-9][0-9]*$/ //正整數 
    var sum = 0;
    const { number } = req.query;

    if(number){
        if(r.test(number)){
            for(var i=1; i <= number; i++){
                sum += i;
            }
            res.send(sum.toString());

        }else{
            res.send('Wrong Parameter');
        }
    }else{
        res.send('Lack of Parameter');
    }
});


// app.post('/sum.html', (req, res) => {
//    res.render('sum2', {name: req.body.number});
// });


app.get('/myName', (req, res) => {
    const userName = req.query.name;
    
    if(userName){
        res.cookie('userName', userName);
        res.render('myName', {name: userName});
    }else{
      const name = req.cookies.userName;
      res.render('myName', {name: name});
    }
});

app.post('/myName', (req, res) => {
    res.cookie('userName', req.body.userName);
    res.redirect('/myName');
});

app.post('/logOut', (req,res) =>{
    res.clearCookie('userName');
    res.redirect('/myName');
});


app.listen(port, () => {
    console.log(`App is listening on port ${port}!`);
});