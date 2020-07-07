const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const registroSchema = new mongoose.Schema(
  {
    data: {
      type: String,
      trim: true,
      required: true
    },
    notificados: {
      type: Number,
      // required: true
    },
    suspeitos: {
      type: Number,
      // required: true
    },
    confirmados: {
      type: Number,
      // required: true
    },
    internados: {
      type: Number,
      // required: true
    },
    mortes: {
      type: Number,
      // required: true
    },
    curados: {
      type: Number,
      // required: true
    },
    descartados: {
      type: Number,
      // required: true
    }

  },
  {
    timestamps: true,
  },
);

registroSchema.plugin(mongoosePaginate);


module.exports = mongoose.model('registro', registroSchema, 'registro');
