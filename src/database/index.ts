import mongoose from "mongoose";

// Iniciar conexão com o banco de dados.
mongoose.connect(`${process.env.MONGO_URI}/dailyplanet`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
