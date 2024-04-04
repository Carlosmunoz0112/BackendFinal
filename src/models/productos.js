
const mongoose = require('mongoose');

const productoSchema = mongoose.Schema({
    id: {
        type: String,
        required: [true, 'El campo id es obligatorio']
    },
    numerodeventa: {
        type: String,
        required: [true, 'El campo Nombre es obligatorio']
    },

producto: {
    type: String,
    required : [true, 'El producto es obligatorio']
},
    precio: {
        type: Number,
        required: [true, 'El campo Correo es obligatorio']
    },
    cantidad: {
        type: Number,
        required: [true, 'El campo cantidad es obligatorio']
    },
    categoria: {
        type: String,
        required: [true, 'El campo categoria es obligatorio']
    },
    descripcion: {
        type: String,
        required: [true, 'El campo de categoria es obligatorio']
    }

});

module.exports = mongoose.model('producto', productoSchema);
