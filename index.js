require('dotenv').config()
const express = require('express')
const app = express()

const date = require('./dataFormat/date.js')



app.get('/api/timestamp/:date?', date)



app.use(express.static('public'));

app.get('/', ( req, res  )=>{
    res.sendFile(__dirname + '/View/index.html')
})

app.use((req, res)=>{
    
    res.status(404)
   
    res.sendFile(__dirname + '/View/404.html')
    

});






app.listen(process.env.PORT || 3000)