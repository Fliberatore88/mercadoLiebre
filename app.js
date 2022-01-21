const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use (express.static(publicPath) );

app.get ('/', (req,res) => {
    res.sendFile (path.resolve(__dirname, 'views','home.html'))
    
})
app.get ('/crea-tu-cuenta', (req,res) => {
    res.sendFile (path.resolve(__dirname, 'views','register.html'))
})

app.get ('/login', (req,res) => {
    res.sendFile (path.resolve(__dirname, 'views','login.html'))
})

app.listen(3001, (err) => {
    if (err){
        console.log('Error', err)
    }else {
        console.log('Levantó el Server correctamente')
    }
})
