const express = require('express')
const ContactModel = require('../model/index')

const router = express.Router()

module.exports = function route() {

     router.get('/', async (req, res, next) => {
          // finding data in database
          const data = await ContactModel.find({})
          // sending response to client
          res.send(data)
     })

     router.post('/', async (req, res, next) => {
          // getting data from client
          if (!req.body) res.status(400).send('No has enviando los parametros correspondientes: nombre, apellido, telefono')

          const { nombre, apellido, telefono } = req.body

          // making contact object
          const contact = new ContactModel({
               nombre,
               apellido,
               telefono
          })
          console.log(contact)
          // saving the contact in the database
          await contact.save()
          // sending response positive to the client
          res.send('OK')
     })

     return router;
}

