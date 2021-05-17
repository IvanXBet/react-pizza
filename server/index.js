const express = require("express")
const mongoose = require("mongoose")
const config = require("config")

const path = require('path');

const app = express()
const port = process.env.PORT || 5000;




app.use(express.json())
app.use(express.json({extended: true}))

app.get('/', (req, res) => {
    res.end(`<div>server</div>`)
})
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/data', require('./routes/menu.routes'))
app.use('/api/data', require('./routes/order.routs'))
app.use('/api/data', require('./routes/userProfil.routes'))

//server static assets in pord


if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

const start = async () => {
    try {
        
        await mongoose.connect(config.get('dbURL'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(port, () => {
            console.log(`server started on port ${port}`)
            
        })
    }catch(e) {
        console.log("server error", e.massage)
        process.exit(1)
    }
}

start()