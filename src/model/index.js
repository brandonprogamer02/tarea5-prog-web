const { model, SchemaTypes, Schema } = require('mongoose')

const ContactSchema = new Schema({
     nombre: SchemaTypes.String,
     apellido: SchemaTypes.String,
     telefono: SchemaTypes.String
},
     {
          versionKey: false
     })

const ContactModel = model('Contact', ContactSchema)

module.exports = ContactModel