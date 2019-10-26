const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'client/build')));

//Home
app.get('/app', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

//Login and create account
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname+'/pages/login.html'));
});

//Forgot password page
app.get('/forgotPassword', (req, res) => {
  res.sendFile(path.join(__dirname+'/pages/forgotPassword.html'));
});

app.post('/login', (req, res) => {
  
});

app.post('/createAccount', (req, res) => {

});

app.post('/forgotPassword', (req, res) => {
  
});

app.post('/logout', (req, res) => {

});

// API FUNCTIONS
// 
app.get('/api/getList', (req,res) => {
  
});

//Landing page
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/pages/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);