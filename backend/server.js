require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const path = require('path');
const session = require('express-session');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB conectado'))
  .catch((err) => console.error('Erro na conexão com MongoDB:', err));

app.use(express.json());

app.use(cors()); 

app.use(session({
  secret: process.env.SESSION_SECRET || 'seu-segredo', 
  resave: false, 
  saveUninitialized: true,
  cookie: {
    secure: true,
    httpOnly: true, 
    maxAge: 3600000, 
    sameSite: 'None', 
  },
}));

app.use('/api/user', userRoutes);

app.use(express.static(path.join(__dirname, '../frontend')));

app.listen(PORT, () => {
  console.log(Servidor rodando na porta ${PORT});
});
