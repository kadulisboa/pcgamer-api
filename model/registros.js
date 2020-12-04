const mongoose = require('mongoose');

const { Schema } = mongoose;

const Registros = new Schema({

    Pecas: {
        type: Schema.Types.ObjectId,
        ref: 'Pecas',
        require: true,
    },

    Quantidade: {
        type: Number,
        require: true,
    },

    ValorTotal: {
        type: Number,
        require: true,
    },

    Pago: {
        type: Boolean,
        require: true
    },

    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Registros', Registros);

