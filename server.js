require('dotenv/config');
const mongoose = require('mongoose');
const app = require('./app');

const { PORT, DB_URL, DB_URL_DEV, ENV } = process.env;

mongoose.connect(ENV === 'dev' ? DB_URL_DEV : DB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  }, () => {
    console.log('Banco de dados conectado');

    app.listen(process.env.PORT || 14000, () => {
      console.log(`Servidor rodando em: http://localhost:${PORT}`);
      console.log(`Ambiente: ${ENV}`);
    });
  },
);
