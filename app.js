const express = require('express');
const path = require('path');
const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use (express.static(publicPath) );

app.get ('/', (req,res) => {
    res.sendFile (path.resolve(__dirname, 'views','home.html'))
    
})
app.get ('/Ofertas', (req,res) => {
    res.sendFile (path.resolve(__dirname, 'views','ofertas.html'))
})

app.listen(3001, (err) => {
    if (err){
        console.log('Error', err)
    }else {
        console.log('Levantó el Server correctamente')
    }
})
