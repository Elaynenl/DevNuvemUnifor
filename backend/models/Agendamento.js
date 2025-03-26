const mongoose = require('mongoose');

const agendamentoSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User', 
      required: true},
    data: {type: Date, required: true },
    horario: {type: String, required: true },
  },
  {
    timestamps: true 
  }
);

const Agendamento = mongoose.model('Agendamento', agendamentoSchema);

module.exports = Agendamento;
