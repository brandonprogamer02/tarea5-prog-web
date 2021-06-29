const mongoose = require('mongoose')

module.exports = function mongoConnection() {

     const connectionStringOffline = 'mongodb://localhost:27017/ChatAppDatabase'
     const connectionStringOnline = 'mongodb+srv://admin02:admin02@cluster0.jdjbj.mongodb.net/ChatApp?retryWrites=true&w=majority'
     try {
          // you can set the connection string to the online is you want
          mongoose.connect(connectionStringOffline, {
               useUnifiedTopology: true,
               useNewUrlParser: true
          })
          console.log('Database is connected sucefully')
     } catch (error) {
          console.log('Database can\'t connection correctly')
     }
}