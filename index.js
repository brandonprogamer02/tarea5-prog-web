const express = require('express');
const router = require('./src/routes')
const mongoConnection = require('./src/mongoConnection')
const app = express()

// defining port
app.set('PORT', process.env.PORT || 5000)

// activing body and basic configurations
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// enabling routes
app.use(
     router()
)

// turning mongodb connection
mongoConnection()

// activing the server for listen
app.listen(app.get('PORT'), () => {
     console.log('The server is Running')
})